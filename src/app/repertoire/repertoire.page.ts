import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.page.html',
  styleUrls: ['./repertoire.page.scss'],
})
export class RepertoirePage implements OnInit {

  NouveauContact:any= [];
  NomPrenoms:String="";
  Email:String="";
  Telephone:String="";

  
  AjoutContact(){

    //console.log('OK');

    //@ts-ignore
    if(document.getElementById("Contact")?.value==""){
       alert("saisie du contact est obligatoire !!! ")
       return;
    }
   
     //@ts-ignore
    if(document.getElementById("NomPrenoms")?.value==""){
      alert("saisie du nom est obligatoire !!! ")
      return;
    }

    //@ts-ignore
    if(document.getElementById("Email")?.value==""){
        alert("saisie de l'e-mail est obligatoire !!! ")
        return;
    }


    else{
   
      //@ts-ignore
      this.NomPrenoms=document.getElementById("NomPrenoms")?.value;
      //@ts-ignore
      this.Email=document.getElementById("Email")?.value;
      //@ts-ignore
      this.Telephone=document.getElementById("Contact")?.value;

      
      this.NouveauContact.push({NOMPRENOMS:this.NomPrenoms,EMAIL:this.Email,TELEPHONE:this.Telephone});
      this.InitialiseSaisie();
    }
  }

  AfficherContacts(){
    return this.NouveauContact;
  }

  removeContact(i : any){
    //alert( i);
    this.NouveauContact.splice(i,1);
  }

  
  InitialiseSaisie(){

    //@ts-ignore
    document.getElementById("NomPrenoms")?.value="";
    //@ts-ignore
    document.getElementById("Email")?.value="";
    //@ts-ignore
    document.getElementById("Contact")?.value="";
  }



  constructor() { }

  ngOnInit() {
  }

}
