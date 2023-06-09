import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent {

  @Input() public parentData:any; 
  @Output() public ReturnColleges = new EventEmitter(); 

  public Colleges:any[] = []; 
  private getCollegesByCity(city: string): string[] { 
    if (city === 'chennai') { 
      return ['M.G.R University', 'Sairam Institute of Technology', 'Rajalakshmi engineering']; 

    } else if (city === 'uk') { 
  return ['S.A engineering college', 
       'Anna university','peri Institute of Technology']; 

    }  

   else if (city === 'kerala') { 
      return['Jayram COLLEGE OF ENGINEERING','Alagappa University','Vidhya Giri arts and science']  
    } 

    else {
      return [];
    }

  }
SendColleges(City: any){
    this.Colleges = this.getCollegesByCity(City);
  this.ReturnColleges.emit(this.Colleges);

  }
refresh(){
    location.reload();

  }
}
