package bk.mobile.ex2.controller;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	@RequestMapping("/")
	@ResponseBody
	public String getAllTopic() {
		return "De tinh khoang cach giua (100.1,102.2) voi (103.1,102.2) vui long nhap : localhost:8080/100.1-102.2TO103.1-102.2";
	}
	
	
	public static double distanceBetween2Points(double la1, double lo1, double la2, double lo2) {
		   double dLat = (la2 - la1) * (Math.PI / 180);
		   double dLon = (lo2 - lo1) * (Math.PI / 180);
		   double la1ToRad = la1 * (Math.PI / 180);
		   double la2ToRad = la2 * (Math.PI / 180);
		   double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(la1ToRad)
		   * Math.cos(la2ToRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		   double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		   double d = 6371 * c;
		   return d;
	}
	@RequestMapping(value = "/{xxTOxx}")           
    @ResponseBody
    public String getDistance(@PathVariable("xxTOxx") String xxTOxx) {
		String[] x=xxTOxx.split("TO");
		String[] t1=x[0].split("-");
		String[] t2=x[1].split("-");
		Double x1=Double.parseDouble(t1[0]);
		Double y1=Double.parseDouble(t1[1]);
		Double x2=Double.parseDouble(t2[0]);
		Double y2=Double.parseDouble(t2[1]);
		
		String re="Khoang cach giua ("+t1[0]+","+t1[1]+") voi ("+t2[0]+","+t2[1]+") la: ";
		return re+ Double.toString(distanceBetween2Points(x1,y1,x2,y2))+" km";
		//return xxTOxx;
    }

}
