import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(dateIn: string) {
    const dateToCompare = new Date();
    const dateInn = new Date(dateIn);
    return formatDistance(dateToCompare, dateInn);
  }




  // transform(value: string) {
  //   let response = '';
  //   const dateIn = new Date(value);
  //   const today = new Date();
  //   if(today.getFullYear() - dateIn.getFullYear() > 0){
  //     if(today.getFullYear() - dateIn.getFullYear() > 1){
  //       response = (today.getFullYear() - dateIn.getFullYear()).toString() + ' Years ago';
  //     }else{
  //       response = (today.getFullYear() - dateIn.getFullYear()).toString() + ' Year ago';
  //     }
  //   }else if(today.getMonth() - dateIn.getMonth() > 0){
  //     if(today.getMonth() - dateIn.getMonth() > 1){
  //       response = (today.getMonth() - dateIn.getMonth()).toString() + ' months ago';
  //     }else{
  //       response = (today.getMonth() - dateIn.getMonth()).toString() + ' month ago';
  //     }
  //   }else if(today.getDay() - dateIn.getDay() > 0){
  //     if(today.getDay() - dateIn.getDay() > 1){
  //       response = (today.getDay() - dateIn.getDay()).toString() + ' Days ago';
  //     }else{
  //       response = (today.getDay() - dateIn.getDay()).toString() + ' Day ago';
  //     }
  //   }else if(today.getHours() - dateIn.getHours() > 0){
  //     if(today.getHours() - dateIn.getHours() > 1){
  //       response = (today.getHours() - dateIn.getHours()).toString() + ' Hours ago';
  //     }else {
  //       response = (today.getHours() - dateIn.getHours()).toString() + ' Hour ago';
  //     }
  //   }else if(today.getMinutes() - dateIn.getMinutes() > 0){
  //     if(today.getMinutes() - dateIn.getMinutes() > 1){
  //       response = (today.getMinutes() - dateIn.getMinutes()).toString() + ' Minutes ago';
  //     }else{
  //       response = (today.getMinutes() - dateIn.getMinutes()).toString() + ' Minute ago';
  //     }
  //   }else{
  //     response = 'just now'
  //   }

  //   return response;
  // }

}
