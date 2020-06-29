import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { switchMap, startWith, every, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-formly-test',
  templateUrl: './formly-test.component.html',
  styleUrls: ['./formly-test.component.css']
})
export class FormlyTestComponent implements OnInit {

  formlyTestFormGroup = new FormGroup({});
  formlyModel = {
    firstname: "Jatin",
    age: 31,
    nationId: 1,
    cityId: null,
    pk: 100
  };
  formlyFields: FormlyFieldConfig[] = [{
    key: "pk"
  },
  {
    key: "firstname",
    type: "input",
    templateOptions: {
      type: "text",
      label: "Firstname",
      required: true
    }
  },
  {
    key: "age",
    type: "input",
    templateOptions: {
      type: "number",
      label: "Age"
    }
  }, {
    key: "nationId",
    type: "select", // <select></select>
    templateOptions: {
      label: "Country",
      options: this.dataService.fetchAllCountrie()
    }
  },
  {
    key: "cityId",
    type: "select", // <select></select>
    templateOptions: {
      label: "City",
      options: []
    },
    expressionProperties: {
      "templateOptions.disabled": (model) => {
        return (!model.nationId);
      }
    },
    hideExpression: '!model.nationId',
    hooks: {
      onInit: (field: FormlyFieldConfig) => {
        field.templateOptions.options = field.form.get("nationId").valueChanges.pipe(
          startWith(this.formlyModel.nationId),
          switchMap((nationId) => {
            return this.dataService.fetchAllCities(nationId);
          }));
      }
    }
  }];

  constructor(private dataService: DataServiceService) { }

  onSubmitHandler() {
    try {
      console.log(this.formlyModel);
      console.log(this.formlyTestFormGroup.value);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}
