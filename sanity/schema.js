import AboutUs from "./schemas/AboutUs";
import Footer from "./schemas/Footer";
import MainSec from "./schemas/MainSec";
import SingleImageCard from "./schemas/SingleImageCard";

import Sponsors from "./schemas/Sponsors";

import teamPage from "./schemas/TeamList";
import Achievement from "./schemas/Achievement";
import ContactUs from "./schemas/ContactUs";
import Events from "./schemas/Events";
import imageList from "./schemas/imageList";
import Leader from "./schemas/Leader";

export const schema = {
  types: [MainSec,AboutUs,Events,Sponsors,Footer,SingleImageCard,teamPage, Leader, Achievement,ContactUs,imageList],
}
