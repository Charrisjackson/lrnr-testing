import '../App.css'
import PageNavigationButton from "../components/PageNavigationButton.jsx";
import HomeCard from "../components/HomeCard.jsx";

const Home = () => {
    return (
        <>
            <div className='flex justify-center mt-14'>
            <img src='/img/lrnr-logo.png' alt='logo' className='h-auto md:w-3/12 w-8/12 logo' id="logoimg" data-testid="logoimg"/>
            </div>
            <p className='text-center text-xl md:text-3xl font-thin mt-4 mb-14 title' data-test-id="homepage-description">Your guided path to programming enlightenment</p>
            <div className='flex justify-center'>
            <PageNavigationButton name={'BEGIN JOURNEY'} routeName={'quizgenerator'} data-test-id="navigate-quiz-generator" id="quizbtn"/>
            </div>
            <HomeCard />
        </>
    )
}

export default Home