"use client"
import Image from 'next/image'
import homeImg from '../Images/bg-header-desktop.svg'
import jobs from '../Data/jobs'
import { json } from 'stream/consumers'
import remove from '../Images/icon-remove.svg'
import Header from '../Components/Header'
import Preloader from '@/Components/Preloader'
import { useEffect, useState } from 'react'
export default function Home() {
  const [clickedLanguage, setClickedLanguages] = useState([""])
  const [isLoading, setIsLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState(jobs);


  const clicked = (language: any) => {
    // Toggle the clicked language
    const updatedClickedLanguages = clickedLanguage.includes(language)
      ? clickedLanguage.filter((lang) => lang !== language)
      : [...clickedLanguage, language];

    setClickedLanguages(updatedClickedLanguages);

    // Filter the jobs based on all selected languages
    const updatedFilteredJobs = jobs.filter((job) => {
      return (
        updatedClickedLanguages.length === 0 ||
        updatedClickedLanguages.every((lang) => job.languauges.includes(lang))
      );
    });

    setFilteredJobs(updatedFilteredJobs);

    // Save the filtered jobs and clicked languages to local storage
    localStorage.setItem('filteredJobs', JSON.stringify(updatedFilteredJobs));
    localStorage.setItem('clickedLanguages', JSON.stringify(updatedClickedLanguages));
  };

  useEffect(() => {
    try {
      const storedFilteredJobsJSON = localStorage.getItem('filteredJobs');

      if (storedFilteredJobsJSON) {
        const storedFilteredJobs = JSON.parse(storedFilteredJobsJSON);
        setFilteredJobs(storedFilteredJobs);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error parsing or retrieving filteredJobs from localStorage:', error);
      setIsLoading(false);
    }
  }, []);




  useEffect(() => {
    // This effect runs only once on component mount
    setClickedLanguages([]); // Ensure it's empty when the component mounts
  }, []);


  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);


  useEffect(() => {
    // Retrieve the existing array from local storage when the component mounts
    const existingClickedLanguages = localStorage.getItem('clickedLanguages');
    if (existingClickedLanguages) {
      const parsedClickedLanguages = JSON.parse(existingClickedLanguages);
      setClickedLanguages(parsedClickedLanguages);
    }

    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  if (isLoading) {
    return <Preloader />;
  }





  const clearFilters = () => {
    // Clear the selected languages and local storage
    setClickedLanguages([]);
    localStorage.removeItem('filteredJobs');
    localStorage.removeItem('clickedLanguages');

    // Reset to show all jobs
    setFilteredJobs(jobs);
  };


  const removeLanguage = (languageToRemove: any) => {
    // Create a new array without the language to be removed
    const newLanguages = clickedLanguage.filter((lang) => lang !== languageToRemove);

    setClickedLanguages(newLanguages);

    // Filter the jobs based on the remaining languages
    const updatedFilteredJobs = jobs.filter((job) => {
      return (
        newLanguages.length === 0 ||
        newLanguages.every((lang) => job.languauges.includes(lang))
      );
    });

    setFilteredJobs(updatedFilteredJobs);

    // Save the filtered jobs and clicked languages to local storage
    localStorage.setItem('filteredJobs', JSON.stringify(updatedFilteredJobs));
    localStorage.setItem('clickedLanguages', JSON.stringify(newLanguages));
  };



  return (
    <main className=''>
      <div className='w-full bg-Desaturated-Dark-Cyan'>
        <Image src={homeImg} alt="home image" className='w-full h-[60px] md:h-[100px]' />
      </div>
      {clickedLanguage.length > 0 &&
        <div className=' w-full flex items-center justify-center mt-5'>
          <div className='p-8 flex rounded-lg justify-between w-5/6 items-center bg-Light-GrayishCyanBackground shadow-2xl'>
            <div className='flex sm:flex-row flex-col gap-2 sm:items-center  gap-col-2 sm:justify-center justify-start items-start w-full md:flex-wrap'>
              {clickedLanguage.map((lang: string) => (
                <div className='md:flex items-center justify-center gap-3 flex-wrap'>
                  <div className='flex items-center justify-center '>
                    <h1 className='text-lg font-bold p-1 text-base bg-Desaturated-Dark-Cyanbg p-1 headerlangu text-Desaturated-Dark-Cyan'>{lang}</h1>
                    <div className='p-[13px] bg-Desaturated-Dark-Cyan headerrem cursor-pointer' onClick={() => removeLanguage(lang)}>
                      <Image src={remove} alt="remove icon" width={10} height={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h1 onClick={clearFilters} className='text-Desaturated-Dark-Cyan hover:underline cursor-pointer transition duration-150 ease-out md:ease-in'>Clear</h1>
          </div>
        </div>
      }


      {filteredJobs.map((job) => (
        <div key={job.id} className="w-full flex items-center justify-center md:mb-3 mb-12 mt-8">
          <div className="flex md:gap-0 gap-8 md:flex-row flex-col md:items-center p-8 md:w-[90%] w-[90%] justify-between bg-Light-GrayishCyanBackground shadow-2xl rounded-lg">
            <div className="md:flex md:place-center gap-4">
              <div className='md:mt-0 mt-[-60px] md:mb-0'>
                <Image src={job.Image01} alt="company logo" width={70} height={70} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col justify-center ">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg text-Desaturated-Dark-Cyan font-bold">{job.company}</h1>
                    {job.new && (
                      <span className="text-white font-xs p-1 bg-Desaturated-Dark-Cyanbg rounded-full text-xs cursor-pointer">New!</span>
                    )}
                    {job.featured && (
                      <span className="text-white font-xs p-1 bg-black rounded-full text-xs cursor-pointer">Featured</span>
                    )}
                  </div>
                  <h2 className="text-base font-extrabold">{job.position}</h2>
                </div>
                <div className="flex items-center text-DarkGrayishCyan gap-3">
                  <h4 className="text-base">{job.postedAt}</h4> .
                  <h5>{job.contract}</h5> .
                  <h3>{job.location}</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div>
                <div className="flex flex-wrap lg:gap-0 gap-2 items-center md:ms-8">
                  {job.languauges.map((language: string, index: number) => (
                    <span
                      key={language} // Unique identifier for each language
                      onClick={() => clicked(language)}
                      className='flex items-center ms-2 p-1 text-Desaturated-Dark-Cyan bg-Desaturated-Dark-Cyanbg rounded-md text-base cursor-pointer hover:bg-Desaturated-Dark-Cyan hover:text-Light-GrayishCyanBackground'
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
