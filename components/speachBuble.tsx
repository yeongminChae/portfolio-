import Image from "next/image";
import Poem from "../pages/cloneCoding/image/poem.png";

export default function SpeachBuble() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="90 90 800 700"
        fill="white"
        stroke="#055757"
        strokeWidth={2}
        className="h-80 w-80"
      >
        {/* <Image
          src={Poem}
          alt="poem"
          layout="fill"
          placeholder="blur"
          className=" object-contain"
        ></Image> */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="
M826.613464,194.500092 
	C826.613464,187.334747 826.483093,180.166443 826.646301,173.004822 
	C826.852356,163.966034 824.859619,155.412094 820.710022,147.500626 
	C809.999695,127.080948 794.153503,114.960327 769.923096,115.008484 
	C729.433350,115.088959 688.938416,114.665901 648.449463,114.566505 
	C486.964783,114.170059 325.478821,114.286423 163.993347,114.237495 
	C131.526840,114.227661 106.341881,139.435913 106.334175,171.978516 
	C106.307159,286.134918 106.311119,400.291351 106.336411,514.447754 
	C106.343246,545.279297 130.477020,569.642578 161.409470,569.928589 
	C197.399094,570.261353 233.390182,570.482117 269.381134,570.605652 
	C311.710297,570.750916 354.040283,570.826111 396.369110,570.685181 
	C401.588318,570.667847 404.898712,572.166321 407.910675,576.532715 
	C424.088623,599.985413 440.568268,623.230042 456.952087,646.540649 
	C459.891968,650.723511 462.870911,654.878845 465.822510,659.033752 
	C468.335510,657.770813 469.270081,655.746338 470.499481,654.021790 
	C489.260834,627.704163 508.039581,601.398682 526.689819,575.002441 
	C528.848022,571.947876 531.258728,570.735168 534.989563,570.727844 
	C572.146606,570.654785 609.302002,570.456299 646.458618,569.984253 
	C686.949341,569.469727 727.453979,570.035034 767.944092,569.495789 
	C789.272217,569.211670 806.534790,560.186951 818.198242,541.804504 
	C824.930298,531.194397 826.971558,519.401123 826.950012,506.971680 
	C826.769958,403.147949 826.709290,299.324005 826.613464,194.500092 
z"
        />
      </svg>
    </>
  );
}
