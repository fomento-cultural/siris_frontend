import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['../../../css/formularioAdminAgregar.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
  }

  cancelar() {
    Swal.fire({
      title: 'Está seguro que desea cancelar?',
      text: `Será redirigido al inicio`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#009045',
      confirmButtonText: 'Confirmar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate([`dashboard`]);
      }
    })
  }

}
