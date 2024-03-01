import { AboutMe } from "./AboutMe";
import { Intro } from "./Intro";
import { Services } from "./Services";
import { VideoPortfolio } from "./VideoPortfolio";

export function Main(){
  return (<main>
    <Intro />
    <Services />
    <AboutMe />
    <VideoPortfolio />
  </main>)
}