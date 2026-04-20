import dayjs from "dayjs";
import {format, setGlobalDateI18n} from 'fecha';


setGlobalDateI18n({
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'vie', 'sab'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  amPm: ['am', 'pm'],

  DoFn: function (D) {
    return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ];
  }
});

export const getCurrentTime = () =>{
    return dayjs().format("HH:mm:ss")
}

export const getCurrentDatetime = () =>{
    return (format(new Date(), 'dddd d') + " de " + format(new Date(), 'MMMM') + " de " + format(new Date(), 'YYYY, HH:mm:ss'))
}