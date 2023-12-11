import AboutUs from "./schemas/AboutUs";
import Footer from "./schemas/Footer";
import MainSec from "./schemas/MainSec";
import SingleImageCard from "./schemas/SingleImageCard";
import ScienceImage from "./schemas/ScienceImage";
import ElectricalImage from "./schemas/ElectricalImage";
import MechanicalImage from "./schemas/MechanicalImage";
import SoftwareImage from "./schemas/SoftwareImage";
import Sponsors from "./schemas/Sponsors";
import ScienceTop from "./schemas/ScienceTop";
import ElectricalTop from "./schemas/ElectricalTop";
import MehcaTop from "./schemas/MehcaTop";
import SoftwareTop from "./schemas/SoftwareTop";
import Teamlist from "./schemas/Teamlist";
import Achievement from "./schemas/Achievement";
import ContactUs from "./schemas/ContactUs";

export const schema = {
  types: [MainSec,AboutUs,Sponsors,Footer,SingleImageCard,Teamlist,Achievement,ContactUs],
}
