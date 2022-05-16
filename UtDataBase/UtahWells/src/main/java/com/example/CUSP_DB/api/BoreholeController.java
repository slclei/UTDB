package com.example.CUSP_DB.api;

import com.example.CUSP_DB.Specification.BoreholeSpecification;
import com.example.CUSP_DB.Specification.BoreholeSpecificationsBuilder;
import com.example.CUSP_DB.dao.BoreholeDao;
import com.example.CUSP_DB.exceptions.BoreholeEmptyNameException;
import com.example.CUSP_DB.model.Borehole;
import com.example.CUSP_DB.service.BoreholeService;
import com.example.CUSP_DB.service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/wells")
public class BoreholeController {

    private BoreholeService boreholeService;
    private ExcelService excelService;

    @Autowired
    public BoreholeController(BoreholeService boreholeService, ExcelService excelService) {
        this.boreholeService = boreholeService;
        this.excelService=excelService;
    }

    //http://localhost:8080/wells/api/4300320047
    @RequestMapping(value="/api/{apiid}",method = RequestMethod.GET)
    public ResponseEntity<Borehole> getBorehoelsByAPI(@PathVariable("apiid") Long id){
        Optional<Borehole> borehole = boreholeService.getBoreholeById(id);

        if (borehole.isPresent()) {
            return new ResponseEntity<>(borehole.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //http://localhost:8080/wells/apilike/4300320047
    @RequestMapping(value="/apilike/{apiid}",method = RequestMethod.GET)
    public ResponseEntity<List<Borehole>> getBorehoelslikeAPI(@PathVariable("apiid") Long id){
        List<Borehole> borehole = boreholeService.getBoreholeLikeId(id);

        if (borehole.size()>0) {
            return new ResponseEntity<>(borehole, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //http://localhost:8080/wells/like?search=api:4300320047,wellName:abc
    @RequestMapping(method=RequestMethod.GET, value="/like")
    @ResponseBody
    public List<Borehole> getBoreholesMore(@RequestParam(value="search") String search){
        BoreholeSpecificationsBuilder builder=new BoreholeSpecificationsBuilder();
        Pattern pattern = Pattern.compile("(\\w+?)(:|<)(\\w+?),");
        Matcher matcher = pattern.matcher(search+",");
        while (matcher.find()) {
            builder.with(matcher.group(1), matcher.group(3));
        }

        Specification<Borehole> spec=builder.build();
        return boreholeService.getAllBoreholes(spec);

    }


    @GetMapping("/boreholes")
    public List<Borehole> getAllBorehoels(){
        return boreholeService.getAllBoreholes();
    }

    @RequestMapping("/addBorehole")
    @PostMapping()
    public ResponseEntity<String> addBorehole(@RequestBody Borehole borehole){
        try{
            Borehole savedBorehole=boreholeService.addBorehole(borehole);
            return ResponseEntity.ok("Added Borehole: "+borehole.toString());
        } catch (BoreholeEmptyNameException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @RequestMapping("/upload")
    @PostMapping()
    public ResponseEntity<String> uploadBorehole(@RequestParam("file") MultipartFile file){
        try{
            excelService.saveAll(file);
            return ResponseEntity.status(HttpStatus.OK).body("upload file successfully: "+file.getOriginalFilename());
        }  catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("upload file failed: "+file.getOriginalFilename()+", "+e.getMessage());
        }
    }

    @RequestMapping("/insert")
    @PostMapping()
    public ResponseEntity<String> insertBorehole(@RequestParam long first, @RequestParam long end){
        try{
            System.out.println("before insert in controller");
            boreholeService.insert(first,end);
            System.out.println("after insert in controller");
            return ResponseEntity.status(HttpStatus.OK).body("Add boreholes successfully");
        }  catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Add boreholes failed: "+e.getMessage());
        }
    }

}
