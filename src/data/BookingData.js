

// adult count based on booking date
const adultArr = []
const adultArr1 = []

for(let i=1;i<=31;i++){
  const ans = HotelBookings.filter(item => item.arrival_date_day_of_month === i && item.arrival_date_month === 'July').reduce((total,curr) => {
    return total + curr.children + curr.adults + curr.babies
  },0)
  adultArr.push(ans);
}

for(let i=1;i<=9;i++){
  const ans = HotelBookings.filter(item => item.arrival_date_day_of_month === i && item.arrival_date_month === 'August').reduce((total,curr) => {
    return total + curr.children + curr.adults + curr.babies
  },0)
  adultArr1.push(ans);
}

console.log([...adultArr,...adultArr1]);



// export const Bookings = [
//     { 
//         "adultBookings" : 62,
//         "childrenBookings" : 1,
//         "totalBookings" : 63,
//         "date" : "1July"
//     } , 
//     { 
//         "adultBookings" : 68,
//         "childrenBookings" : 4,
//         "totalBookings" : 72,
//         "date" : "2July"
//     } , 
//     { 
//         "adultBookings" : 73,
//         "childrenBookings" : 4,
//         "totalBookings" : 77,
//         "date" : "3July"
//     } , 
//     { 
//         "adultBookings" : 63,
//         "childrenBookings" : 7,
//         "totalBookings" : 72,
//         "date" : "4July"
//     } , 
//     { 
//         "adultBookings" : 56,
//         "childrenBookings" : 7,
//         "totalBookings" : 63,
//         "date" : "5July"
//     } , 
//     { 
//         "adultBookings" : 65,
//         "childrenBookings" : 7,
//         "totalBookings" : 73,
//         "date" : "6July"
//     } , 
//     { 
//         "adultBookings" : 35,
//         "childrenBookings" : 3,
//         "totalBookings" : 38,
//         "date" : "7July"
//     } , 
//     { 
//         "adultBookings" : 41,
//         "childrenBookings" : 1,
//         "totalBookings" : 42,
//         "date" : "8July"
//     } , 
//     { 
//         "adultBookings" : 36,
//         "childrenBookings" : 8,
//         "totalBookings" : 45,
//         "date" : "9July"
//     } ,  
//     {
//          "adultBookings" : 64,
//          "childrenBookings" : 7,
//          "totalBookings" : 75,
//          "date" : "10July"
//     } , 
//     {
//          "adultBookings" : 54,
//          "childrenBookings" : 3,
//          "totalBookings" : 58,
//          "date" : "11July"
//     } , 
//     {
//          "adultBookings" : 79,
//          "childrenBookings" : 20,
//          "totalBookings" : 102,
//          "date" : "12July"
//     } , 
//     {
//          "adultBookings" : 81,
//          "childrenBookings" : 1,
//          "totalBookings" : 83,
//          "date" : "13July"
//     } , 
//     {
//          "adultBookings" : 42,
//          "childrenBookings" : 3,
//          "totalBookings" : 45,
//          "date" : "14July"
//     } , 
//     {
//          "adultBookings" : 51,
//          "childrenBookings" : 4,
//          "totalBookings" : 55,
//          "date" : "15July"
//     } , 
//     {
//          "adultBookings" : 47,
//          "childrenBookings" : 7,
//          "totalBookings" : 54,
//          "date" : "16July"
//     } , 
//     {
//          "adultBookings" : 97,
//          "childrenBookings" : 9,
//          "totalBookings" : 106,
//          "date" : "17July"
//     } , 
//     {
//          "adultBookings" : 58,
//          "childrenBookings" : 11,
//          "totalBookings" : 71,
//          "date" : "18July"
//     } , 
//     {
//          "adultBookings" : 55,
//          "childrenBookings" : 7,
//          "totalBookings" : 63,
//          "date" : "19July"
//     } , 
//     {
//          "adultBookings" : 64,
//          "childrenBookings" : 12,
//          "totalBookings" : 78,
//          "date" : "20July"
//     } , 
//     {
//          "adultBookings" : 26,
//          "childrenBookings" : 3,
//          "totalBookings" : 29,
//          "date" : "21July"
//     } , 
//     {
//          "adultBookings" : 14,
//          "childrenBookings" : 3,
//          "totalBookings" : 17,
//          "date" : "22July"
//     } , 
//     {
//          "adultBookings" : 30,
//          "childrenBookings" : 4,
//          "totalBookings" : 34,
//          "date" : "23July"
//     } , 
//     { 
//          "adultBookings" : 66,
//          "childrenBookings" : 4,
//          "totalBookings" : 70,
//          "date" : "24July"
//     } , 
//     {
//          "adultBookings" : 84,
//          "childrenBookings" : 7,
//          "totalBookings" : 91,
//          "date" : "25July"
//     } , 
//     {
//          "adultBookings" : 31,
//          "childrenBookings" : 4,
//          "totalBookings" : 35,
//          "date" : "26July"
//     } , 
//     {
//          "adultBookings" : 76,
//          "childrenBookings" : 6,
//          "totalBookings" : 82,
//          "date" : "27July"
//     } , 
//     {
//          "adultBookings" : 28,
//          "childrenBookings" : 4,
//          "totalBookings" : 32,
//          "date" : "28July"
//     } , 
//     {
//          "adultBookings" : 41,
//          "childrenBookings" : 2,
//          "totalBookings" : 43,
//          "date" : "29July"
//     } , 
//     {
//          "adultBookings" : 39,
//          "childrenBookings" : 4,
//          "totalBookings" : 43,
//          "date" : "30July"
//     } , 
//     {
//          "adultBookings" : 52,
//          "childrenBookings" : 6,
//          "totalBookings" : 58,
//          "date" : "31July"
//     } , 
//     {
//          "adultBookings" : 56,
//          "childrenBookings" : 14,
//          "totalBookings" : 70,
//          "date" : "1August"
//     } , 
//     {
//          "adultBookings" : 25,
//          "childrenBookings" : 1,
//          "totalBookings" : 26,
//          "date" : "2August"
//     } , 
//     {
//          "adultBookings" : 21,
//          "childrenBookings" : 4,
//          "totalBookings" : 26,
//          "date" : "3August"
//     } , 
//     {
//          "adultBookings" : 27,
//          "childrenBookings" : 0,
//          "totalBookings" : 28,
//          "date" : "4August"
//     } , 
//     {
//          "adultBookings" : 30,
//          "childrenBookings" : 0,
//          "totalBookings" : 31,
//          "date" : "5August"
//     } , 
//     {
//          "adultBookings" : 27,
//          "childrenBookings" : 3,
//          "totalBookings" : 30,
//          "date" : "6August"
//     } , 
//     {
//          "adultBookings" : 44,
//          "childrenBookings" : 8,
//          "totalBookings" : 53,
//          "date" : "7August"
//     } , 
//     {
//          "adultBookings" : 55,
//          "childrenBookings" : 8,
//          "totalBookings" : 64,
//          "date" : "8August"
//     } , 
//     {
//          "adultBookings" : 29,
//          "childrenBookings" : 2,
//          "totalBookings" : 32,
//          "date" : "9August"
//     } ,
// ]




export const  Bookings = {
     labels : [
          "July 1","July 2","July 3","July 4","July 5","July 6","July 7","July 8","July 9","July 10","July 11","July 12","July 13","July 14","July 15","July 16","July 17","July 18","July 19","July 20","July 21","July 22","July 23","July 24","July 25","July 26","July 27","July 28","July 29","July 30","July 31","August 1","August 2","August 3","August 4","August 5","August 6","August 7","August 8","August 9"    
     ],
     datasets: [{
          data : [62, 68, 73, 63, 56, 65, 35, 41, 36, 64, 54, 79, 81, 42, 51, 47, 97, 58, 55, 64, 26, 14, 30, 66, 84, 31, 76, 28, 41, 39, 52, 56, 25, 21, 27, 30, 27, 44, 55, 29]
     }]
}


