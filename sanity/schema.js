import AboutUs from "./schemas/AboutUs";
import Footer from "./schemas/Footer";
import MainSec from "./schemas/MainSec";
import SingleImageCard from "./schemas/SingleImageCard";
import ScienceImage from "./schemas/ScienceImage";
import ElectricalImage from "./schemas/ElectricalImage";
import MechanicalImage from "./schemas/MechanicalImage";
import SoftwareImage from "./schemas/SoftwareImage";
import Sponsors from "./schemas/Sponsors";

export const schema = {
  types: [MainSec,AboutUs,Sponsors,Footer,SingleImageCard,ScienceImage,ElectricalImage,MechanicalImage,SoftwareImage],
}
