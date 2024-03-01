import { AboutMe } from "./AboutMe";
import { Intro } from "./Intro";
import { Services } from "./Services";

export function Main(){
  return (<main>
    <Intro />
    <Services />
    <AboutMe />
  </main>)
}