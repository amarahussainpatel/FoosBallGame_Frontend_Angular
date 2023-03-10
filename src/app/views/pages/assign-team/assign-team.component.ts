import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.scss']
})
export class AssignTeamComponent {
  selectedRows: any;
  event: any;
  settings = {
    // delete: {
    //   confirmDelete: true,
    //   deleteButtonContent: '<i class="fa fa-trash" style="font-size:32px"></i>',
    //   saveButtonContent: 'save',
    //   cancelButtonContent:'<i class="fa fa-close"></i>',
    // },
    // edit: {
    //   confirmSave: true,
    //   editButtonContent:'<i class="fa fa-edit" style="font-size:32px"></i>',
    //   saveButtonContent: 'save',
    //   cancelButtonContent:'<i class="fa fa-close"></i>',
    // },
    columns: {
      name: {
        title: 'Player Name',  
      },
      cnic: {
        title: 'Player CNIC'
      },
      team: {
        title: 'Team'
      }
    },
    actions:{
      add:false
    }
  };

  data = [
    {
      name: "Amara",
      cnic: "42301-98098332-9",
      team: ""
    },
    // ... other rows here
    {
      name: "Amara",
      cnic: "42301-98098332-9",
      team: "Vegas Villas"
    }
  ];

  // onRowSelect(event) {
  //   this.selectedRows = event.selected;
  // }

  onRowSelect(event) {
    console.log("Delete works "+event.selected);
 }

 onDeleteConfirm(event) {
  console.log("Delete Event In Console")
  console.log(event);
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}

public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  // onDeleteConfirm(event: Event) {
  //   console.log("Delete Event In Console")
  //   console.log(event);
  //   // const target = event.target as HTMLInputElement;
  //   // if (window.confirm('Are you sure you want to delete?')) {
  //   //   target.confirm.resolve();
  //   //   target.value.co
  //   // } else {
  //   //   event.confirm.reject();
  //   // }
  // }
}
