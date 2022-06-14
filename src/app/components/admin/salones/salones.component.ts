import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent implements OnInit {

  constructor(private router:ActivatedRoute, private route:Router) { }
  
  modulo: any=this.router.snapshot.paramMap.get('modulo');

  ngOnInit(): void {
  }

  cancelar() {
    Swal.fire({
      title: 'Está seguro que desea cancelar?',
      text: "Será redirigido a {{modulo}}",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#009045',
      confirmButtonText: 'Confirmar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['admin/:modulo']);
      }
    })
  }

}
