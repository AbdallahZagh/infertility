import React, { useState } from 'react'
import Header from '../../Components/Header'
import SideBar from '../../Components/SideBar'
import { useTranslation } from 'react-i18next';
import Card from './Components/Card';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

/* =====================================================================
   API INTEGRATION (commented for demo)
   ---------------------------------------------------------------------
   This page is demoing with mock JSON data so it runs offline.

   // import { fetchData, postData, updateData, deleteData } from '../../api/crudServices';
   // Example:
   // useEffect(() => {
   //   const load = async () => {
   //     try {
   //       const res = await fetchData('/api/endpoint');
   //       setState(res);
   //     } catch (e) { console.error(e); }
   //   };
   //   load();
   // }, []);

   ===================================================================== */


const Patients = ({type}) => {
        const { i18n } = useTranslation();

       const patients = [
  {
    serialNumber: "#112201",
    name: "عمر محمد",
    dateOfBirth: "1/4/1988",
    nationality: "سعودي",
    email: "omar.mohammad1@gmail.com",
    phoneNumber: "32145001",
    gender: "male",
  },
  {
    serialNumber: "#112202",
    name: "دانا أحمد",
    dateOfBirth: "12/6/1990",
    nationality: "سعودية",
    email: "dana.ahmed2@gmail.com",
    phoneNumber: "32145002",
    gender: "female",
  },
  {
    serialNumber: "#112203",
    name: "ليلى خالد",
    dateOfBirth: "23/8/1995",
    nationality: "سعودية",
    email: "leila.khaled3@gmail.com",
    phoneNumber: "32145003",
    gender: "female",
  },
  {
    serialNumber: "#112204",
    name: "ماجد يوسف",
    dateOfBirth: "3/1/1987",
    nationality: "سعودي",
    email: "majed.yousef4@gmail.com",
    phoneNumber: "32145004",
    gender: "male",
  },
  {
    serialNumber: "#112205",
    name: "هالة حسن",
    dateOfBirth: "17/2/1992",
    nationality: "سعودية",
    email: "hala.hassan5@gmail.com",
    phoneNumber: "32145005",
    gender: "female",
  },
  {
    serialNumber: "#112206",
    name: "فهد علي",
    dateOfBirth: "29/11/1989",
    nationality: "سعودي",
    email: "fahad.ali6@gmail.com",
    phoneNumber: "32145006",
    gender: "male",
  },
  {
    serialNumber: "#112207",
    name: "سارة ناصر",
    dateOfBirth: "8/9/1994",
    nationality: "سعودية",
    email: "sara.nasser7@gmail.com",
    phoneNumber: "32145007",
    gender: "female",
  },
  {
    serialNumber: "#112208",
    name: "زياد إبراهيم",
    dateOfBirth: "15/7/1991",
    nationality: "سعودي",
    email: "ziyad.ibrahim8@gmail.com",
    phoneNumber: "32145008",
    gender: "male",
  },
  {
    serialNumber: "#112209",
    name: "ريم فؤاد",
    dateOfBirth: "30/3/1996",
    nationality: "سعودية",
    email: "reem.fouad9@gmail.com",
    phoneNumber: "32145009",
    gender: "female",
  },
  {
    serialNumber: "#112210",
    name: "حسام مازن",
    dateOfBirth: "11/5/1985",
    nationality: "سعودي",
    email: "hossam.mazen10@gmail.com",
    phoneNumber: "32145010",
    gender: "male",
  },
  {
    serialNumber: "#112211",
    name: "نور عادل",
    dateOfBirth: "4/10/1993",
    nationality: "سعودية",
    email: "noor.adel11@gmail.com",
    phoneNumber: "32145011",
    gender: "female",
  },
  {
    serialNumber: "#112212",
    name: "راشد فهد",
    dateOfBirth: "27/6/1990",
    nationality: "سعودي",
    email: "rashed.fahad12@gmail.com",
    phoneNumber: "32145012",
    gender: "male",
  },
  {
    serialNumber: "#112213",
    name: "مها سعد",
    dateOfBirth: "9/12/1994",
    nationality: "سعودية",
    email: "maha.saad13@gmail.com",
    phoneNumber: "32145013",
    gender: "female",
  },
  {
    serialNumber: "#112214",
    name: "سامي جابر",
    dateOfBirth: "20/8/1988",
    nationality: "سعودي",
    email: "sami.jaber14@gmail.com",
    phoneNumber: "32145014",
    gender: "male",
  },
  {
    serialNumber: "#112215",
    name: "هدى طارق",
    dateOfBirth: "7/4/1992",
    nationality: "سعودية",
    email: "huda.tarek15@gmail.com",
    phoneNumber: "32145015",
    gender: "female",
  },
  {
    serialNumber: "#112216",
    name: "نواف زيد",
    dateOfBirth: "2/1/1990",
    nationality: "سعودي",
    email: "nawaf.zeid16@gmail.com",
    phoneNumber: "32145016",
    gender: "male",
  },
  {
    serialNumber: "#112217",
    name: "حنان باسم",
    dateOfBirth: "14/9/1993",
    nationality: "سعودية",
    email: "hanan.basem17@gmail.com",
    phoneNumber: "32145017",
    gender: "female",
  },
  {
    serialNumber: "#112218",
    name: "وليد أحمد",
    dateOfBirth: "19/7/1987",
    nationality: "سعودي",
    email: "waleed.ahmed18@gmail.com",
    phoneNumber: "32145018",
    gender: "male",
  },
  {
    serialNumber: "#112219",
    name: "أمل سعيد",
    dateOfBirth: "25/11/1991",
    nationality: "سعودية",
    email: "amal.saeed19@gmail.com",
    phoneNumber: "32145019",
    gender: "female",
  },
  {
    serialNumber: "#112220",
    name: "باسل كريم",
    dateOfBirth: "6/5/1989",
    nationality: "سعودي",
    email: "basel.karim20@gmail.com",
    phoneNumber: "32145020",
    gender: "male",
  },
  {
    serialNumber: "#112221",
    name: "جميلة مازن",
    dateOfBirth: "13/3/1995",
    nationality: "سعودية",
    email: "jamila.mazen21@gmail.com",
    phoneNumber: "32145021",
    gender: "female",
  },
  {
    serialNumber: "#112222",
    name: "طارق رائد",
    dateOfBirth: "5/10/1990",
    nationality: "سعودي",
    email: "tareq.raed22@gmail.com",
    phoneNumber: "32145022",
    gender: "male",
  },
  {
    serialNumber: "#112223",
    name: "رنا إياد",
    dateOfBirth: "21/2/1992",
    nationality: "سعودية",
    email: "rana.eyad23@gmail.com",
    phoneNumber: "32145023",
    gender: "female",
  },
  {
    serialNumber: "#112224",
    name: "عادل سمير",
    dateOfBirth: "9/6/1988",
    nationality: "سعودي",
    email: "adel.samir24@gmail.com",
    phoneNumber: "32145024",
    gender: "male",
  },
  {
    serialNumber: "#112225",
    name: "منى عوض",
    dateOfBirth: "2/12/1994",
    nationality: "سعودية",
    email: "mona.awad25@gmail.com",
    phoneNumber: "32145025",
    gender: "female",
  },
  {
    serialNumber: "#112226",
    name: "خالد جهاد",
    dateOfBirth: "18/7/1991",
    nationality: "سعودي",
    email: "khaled.jehad26@gmail.com",
    phoneNumber: "32145026",
    gender: "male",
  },
  {
    serialNumber: "#112227",
    name: "ميساء أحمد",
    dateOfBirth: "11/9/1993",
    nationality: "سعودية",
    email: "maysa.ahmed27@gmail.com",
    phoneNumber: "32145027",
    gender: "female",
  },
  {
    serialNumber: "#112228",
    name: "ياسر عادل",
    dateOfBirth: "16/8/1986",
    nationality: "سعودي",
    email: "yaser.adel28@gmail.com",
    phoneNumber: "32145028",
    gender: "male",
  },
  {
    serialNumber: "#112229",
    name: "إيمان سامي",
    dateOfBirth: "4/4/1995",
    nationality: "سعودية",
    email: "iman.sami29@gmail.com",
    phoneNumber: "32145029",
    gender: "female",
  },
  {
    serialNumber: "#112230",
    name: "أيمن فؤاد",
    dateOfBirth: "27/1/1989",
    nationality: "سعودي",
    email: "ayman.fouad30@gmail.com",
    phoneNumber: "32145030",
    gender: "male",
  },
  {
    serialNumber: "#112201",
    name: "عمر محمد",
    dateOfBirth: "1/4/1988",
    nationality: "سعودي",
    email: "omar.mohammad1@gmail.com",
    phoneNumber: "32145001",
    gender: "male",
  },
  {
    serialNumber: "#112202",
    name: "دانا أحمد",
    dateOfBirth: "12/6/1990",
    nationality: "سعودية",
    email: "dana.ahmed2@gmail.com",
    phoneNumber: "32145002",
    gender: "female",
  },
  {
    serialNumber: "#112203",
    name: "ليلى خالد",
    dateOfBirth: "23/8/1995",
    nationality: "سعودية",
    email: "leila.khaled3@gmail.com",
    phoneNumber: "32145003",
    gender: "female",
  },
  {
    serialNumber: "#112204",
    name: "ماجد يوسف",
    dateOfBirth: "3/1/1987",
    nationality: "سعودي",
    email: "majed.yousef4@gmail.com",
    phoneNumber: "32145004",
    gender: "male",
  },
  {
    serialNumber: "#112205",
    name: "هالة حسن",
    dateOfBirth: "17/2/1992",
    nationality: "سعودية",
    email: "hala.hassan5@gmail.com",
    phoneNumber: "32145005",
    gender: "female",
  },
  {
    serialNumber: "#112206",
    name: "فهد علي",
    dateOfBirth: "29/11/1989",
    nationality: "سعودي",
    email: "fahad.ali6@gmail.com",
    phoneNumber: "32145006",
    gender: "male",
  },
  {
    serialNumber: "#112207",
    name: "سارة ناصر",
    dateOfBirth: "8/9/1994",
    nationality: "سعودية",
    email: "sara.nasser7@gmail.com",
    phoneNumber: "32145007",
    gender: "female",
  },
  {
    serialNumber: "#112208",
    name: "زياد إبراهيم",
    dateOfBirth: "15/7/1991",
    nationality: "سعودي",
    email: "ziyad.ibrahim8@gmail.com",
    phoneNumber: "32145008",
    gender: "male",
  },
  {
    serialNumber: "#112209",
    name: "ريم فؤاد",
    dateOfBirth: "30/3/1996",
    nationality: "سعودية",
    email: "reem.fouad9@gmail.com",
    phoneNumber: "32145009",
    gender: "female",
  },
  {
    serialNumber: "#112210",
    name: "حسام مازن",
    dateOfBirth: "11/5/1985",
    nationality: "سعودي",
    email: "hossam.mazen10@gmail.com",
    phoneNumber: "32145010",
    gender: "male",
  },
  {
    serialNumber: "#112211",
    name: "نور عادل",
    dateOfBirth: "4/10/1993",
    nationality: "سعودية",
    email: "noor.adel11@gmail.com",
    phoneNumber: "32145011",
    gender: "female",
  },
  {
    serialNumber: "#112212",
    name: "راشد فهد",
    dateOfBirth: "27/6/1990",
    nationality: "سعودي",
    email: "rashed.fahad12@gmail.com",
    phoneNumber: "32145012",
    gender: "male",
  },
  {
    serialNumber: "#112213",
    name: "مها سعد",
    dateOfBirth: "9/12/1994",
    nationality: "سعودية",
    email: "maha.saad13@gmail.com",
    phoneNumber: "32145013",
    gender: "female",
  },
  {
    serialNumber: "#112214",
    name: "سامي جابر",
    dateOfBirth: "20/8/1988",
    nationality: "سعودي",
    email: "sami.jaber14@gmail.com",
    phoneNumber: "32145014",
    gender: "male",
  },
  {
    serialNumber: "#112215",
    name: "هدى طارق",
    dateOfBirth: "7/4/1992",
    nationality: "سعودية",
    email: "huda.tarek15@gmail.com",
    phoneNumber: "32145015",
    gender: "female",
  },
  {
    serialNumber: "#112216",
    name: "نواف زيد",
    dateOfBirth: "2/1/1990",
    nationality: "سعودي",
    email: "nawaf.zeid16@gmail.com",
    phoneNumber: "32145016",
    gender: "male",
  },
  {
    serialNumber: "#112217",
    name: "حنان باسم",
    dateOfBirth: "14/9/1993",
    nationality: "سعودية",
    email: "hanan.basem17@gmail.com",
    phoneNumber: "32145017",
    gender: "female",
  },
  {
    serialNumber: "#112218",
    name: "وليد أحمد",
    dateOfBirth: "19/7/1987",
    nationality: "سعودي",
    email: "waleed.ahmed18@gmail.com",
    phoneNumber: "32145018",
    gender: "male",
  },
  {
    serialNumber: "#112219",
    name: "أمل سعيد",
    dateOfBirth: "25/11/1991",
    nationality: "سعودية",
    email: "amal.saeed19@gmail.com",
    phoneNumber: "32145019",
    gender: "female",
  },
  {
    serialNumber: "#112220",
    name: "باسل كريم",
    dateOfBirth: "6/5/1989",
    nationality: "سعودي",
    email: "basel.karim20@gmail.com",
    phoneNumber: "32145020",
    gender: "male",
  },
  {
    serialNumber: "#112221",
    name: "جميلة مازن",
    dateOfBirth: "13/3/1995",
    nationality: "سعودية",
    email: "jamila.mazen21@gmail.com",
    phoneNumber: "32145021",
    gender: "female",
  },
  {
    serialNumber: "#112222",
    name: "طارق رائد",
    dateOfBirth: "5/10/1990",
    nationality: "سعودي",
    email: "tareq.raed22@gmail.com",
    phoneNumber: "32145022",
    gender: "male",
  },
  {
    serialNumber: "#112223",
    name: "رنا إياد",
    dateOfBirth: "21/2/1992",
    nationality: "سعودية",
    email: "rana.eyad23@gmail.com",
    phoneNumber: "32145023",
    gender: "female",
  },
  {
    serialNumber: "#112224",
    name: "عادل سمير",
    dateOfBirth: "9/6/1988",
    nationality: "سعودي",
    email: "adel.samir24@gmail.com",
    phoneNumber: "32145024",
    gender: "male",
  },
  {
    serialNumber: "#112225",
    name: "منى عوض",
    dateOfBirth: "2/12/1994",
    nationality: "سعودية",
    email: "mona.awad25@gmail.com",
    phoneNumber: "32145025",
    gender: "female",
  },
  {
    serialNumber: "#112226",
    name: "خالد جهاد",
    dateOfBirth: "18/7/1991",
    nationality: "سعودي",
    email: "khaled.jehad26@gmail.com",
    phoneNumber: "32145026",
    gender: "male",
  },
  {
    serialNumber: "#112227",
    name: "ميساء أحمد",
    dateOfBirth: "11/9/1993",
    nationality: "سعودية",
    email: "maysa.ahmed27@gmail.com",
    phoneNumber: "32145027",
    gender: "female",
  },
  {
    serialNumber: "#112228",
    name: "ياسر عادل",
    dateOfBirth: "16/8/1986",
    nationality: "سعودي",
    email: "yaser.adel28@gmail.com",
    phoneNumber: "32145028",
    gender: "male",
  },
  {
    serialNumber: "#112229",
    name: "إيمان سامي",
    dateOfBirth: "4/4/1995",
    nationality: "سعودية",
    email: "iman.sami29@gmail.com",
    phoneNumber: "32145029",
    gender: "female",
  },
  {
    serialNumber: "#112230",
    name: "أيمن فؤاد",
    dateOfBirth: "27/1/1989",
    nationality: "سعودي",
    email: "ayman.fouad30@gmail.com",
    phoneNumber: "32145030",
    gender: "male",
  },
  {
    serialNumber: "#112201",
    name: "عمر محمد",
    dateOfBirth: "1/4/1988",
    nationality: "سعودي",
    email: "omar.mohammad1@gmail.com",
    phoneNumber: "32145001",
    gender: "male",
  },
  {
    serialNumber: "#112202",
    name: "دانا أحمد",
    dateOfBirth: "12/6/1990",
    nationality: "سعودية",
    email: "dana.ahmed2@gmail.com",
    phoneNumber: "32145002",
    gender: "female",
  },
  {
    serialNumber: "#112203",
    name: "ليلى خالد",
    dateOfBirth: "23/8/1995",
    nationality: "سعودية",
    email: "leila.khaled3@gmail.com",
    phoneNumber: "32145003",
    gender: "female",
  },
  {
    serialNumber: "#112204",
    name: "ماجد يوسف",
    dateOfBirth: "3/1/1987",
    nationality: "سعودي",
    email: "majed.yousef4@gmail.com",
    phoneNumber: "32145004",
    gender: "male",
  },
  {
    serialNumber: "#112205",
    name: "هالة حسن",
    dateOfBirth: "17/2/1992",
    nationality: "سعودية",
    email: "hala.hassan5@gmail.com",
    phoneNumber: "32145005",
    gender: "female",
  },
  {
    serialNumber: "#112206",
    name: "فهد علي",
    dateOfBirth: "29/11/1989",
    nationality: "سعودي",
    email: "fahad.ali6@gmail.com",
    phoneNumber: "32145006",
    gender: "male",
  },
  {
    serialNumber: "#112207",
    name: "سارة ناصر",
    dateOfBirth: "8/9/1994",
    nationality: "سعودية",
    email: "sara.nasser7@gmail.com",
    phoneNumber: "32145007",
    gender: "female",
  },
  {
    serialNumber: "#112208",
    name: "زياد إبراهيم",
    dateOfBirth: "15/7/1991",
    nationality: "سعودي",
    email: "ziyad.ibrahim8@gmail.com",
    phoneNumber: "32145008",
    gender: "male",
  },
  {
    serialNumber: "#112209",
    name: "ريم فؤاد",
    dateOfBirth: "30/3/1996",
    nationality: "سعودية",
    email: "reem.fouad9@gmail.com",
    phoneNumber: "32145009",
    gender: "female",
  },
  {
    serialNumber: "#112210",
    name: "حسام مازن",
    dateOfBirth: "11/5/1985",
    nationality: "سعودي",
    email: "hossam.mazen10@gmail.com",
    phoneNumber: "32145010",
    gender: "male",
  },
  {
    serialNumber: "#112211",
    name: "نور عادل",
    dateOfBirth: "4/10/1993",
    nationality: "سعودية",
    email: "noor.adel11@gmail.com",
    phoneNumber: "32145011",
    gender: "female",
  },
  {
    serialNumber: "#112212",
    name: "راشد فهد",
    dateOfBirth: "27/6/1990",
    nationality: "سعودي",
    email: "rashed.fahad12@gmail.com",
    phoneNumber: "32145012",
    gender: "male",
  },
  {
    serialNumber: "#112213",
    name: "مها سعد",
    dateOfBirth: "9/12/1994",
    nationality: "سعودية",
    email: "maha.saad13@gmail.com",
    phoneNumber: "32145013",
    gender: "female",
  },
  {
    serialNumber: "#112214",
    name: "سامي جابر",
    dateOfBirth: "20/8/1988",
    nationality: "سعودي",
    email: "sami.jaber14@gmail.com",
    phoneNumber: "32145014",
    gender: "male",
  },
  {
    serialNumber: "#112215",
    name: "هدى طارق",
    dateOfBirth: "7/4/1992",
    nationality: "سعودية",
    email: "huda.tarek15@gmail.com",
    phoneNumber: "32145015",
    gender: "female",
  },
  {
    serialNumber: "#112216",
    name: "نواف زيد",
    dateOfBirth: "2/1/1990",
    nationality: "سعودي",
    email: "nawaf.zeid16@gmail.com",
    phoneNumber: "32145016",
    gender: "male",
  },
  {
    serialNumber: "#112217",
    name: "حنان باسم",
    dateOfBirth: "14/9/1993",
    nationality: "سعودية",
    email: "hanan.basem17@gmail.com",
    phoneNumber: "32145017",
    gender: "female",
  },
  {
    serialNumber: "#112218",
    name: "وليد أحمد",
    dateOfBirth: "19/7/1987",
    nationality: "سعودي",
    email: "waleed.ahmed18@gmail.com",
    phoneNumber: "32145018",
    gender: "male",
  },
  {
    serialNumber: "#112219",
    name: "أمل سعيد",
    dateOfBirth: "25/11/1991",
    nationality: "سعودية",
    email: "amal.saeed19@gmail.com",
    phoneNumber: "32145019",
    gender: "female",
  },
  {
    serialNumber: "#112220",
    name: "باسل كريم",
    dateOfBirth: "6/5/1989",
    nationality: "سعودي",
    email: "basel.karim20@gmail.com",
    phoneNumber: "32145020",
    gender: "male",
  },
  {
    serialNumber: "#112221",
    name: "جميلة مازن",
    dateOfBirth: "13/3/1995",
    nationality: "سعودية",
    email: "jamila.mazen21@gmail.com",
    phoneNumber: "32145021",
    gender: "female",
  },
  {
    serialNumber: "#112222",
    name: "طارق رائد",
    dateOfBirth: "5/10/1990",
    nationality: "سعودي",
    email: "tareq.raed22@gmail.com",
    phoneNumber: "32145022",
    gender: "male",
  },
  {
    serialNumber: "#112223",
    name: "رنا إياد",
    dateOfBirth: "21/2/1992",
    nationality: "سعودية",
    email: "rana.eyad23@gmail.com",
    phoneNumber: "32145023",
    gender: "female",
  },
  {
    serialNumber: "#112224",
    name: "عادل سمير",
    dateOfBirth: "9/6/1988",
    nationality: "سعودي",
    email: "adel.samir24@gmail.com",
    phoneNumber: "32145024",
    gender: "male",
  },
  {
    serialNumber: "#112225",
    name: "منى عوض",
    dateOfBirth: "2/12/1994",
    nationality: "سعودية",
    email: "mona.awad25@gmail.com",
    phoneNumber: "32145025",
    gender: "female",
  },
  {
    serialNumber: "#112226",
    name: "خالد جهاد",
    dateOfBirth: "18/7/1991",
    nationality: "سعودي",
    email: "khaled.jehad26@gmail.com",
    phoneNumber: "32145026",
    gender: "male",
  },
  {
    serialNumber: "#112227",
    name: "ميساء أحمد",
    dateOfBirth: "11/9/1993",
    nationality: "سعودية",
    email: "maysa.ahmed27@gmail.com",
    phoneNumber: "32145027",
    gender: "female",
  },
  {
    serialNumber: "#112228",
    name: "ياسر عادل",
    dateOfBirth: "16/8/1986",
    nationality: "سعودي",
    email: "yaser.adel28@gmail.com",
    phoneNumber: "32145028",
    gender: "male",
  },
  {
    serialNumber: "#112229",
    name: "إيمان سامي",
    dateOfBirth: "4/4/1995",
    nationality: "سعودية",
    email: "iman.sami29@gmail.com",
    phoneNumber: "32145029",
    gender: "female",
  },
  {
    serialNumber: "#112230",
    name: "أيمن فؤاد",
    dateOfBirth: "27/1/1989",
    nationality: "سعودي",
    email: "ayman.fouad30@gmail.com",
    phoneNumber: "32145030",
    gender: "male",
  },
  {
    serialNumber: "#112201",
    name: "عمر محمد",
    dateOfBirth: "1/4/1988",
    nationality: "سعودي",
    email: "omar.mohammad1@gmail.com",
    phoneNumber: "32145001",
    gender: "male",
  },
  {
    serialNumber: "#112202",
    name: "دانا أحمد",
    dateOfBirth: "12/6/1990",
    nationality: "سعودية",
    email: "dana.ahmed2@gmail.com",
    phoneNumber: "32145002",
    gender: "female",
  },
  {
    serialNumber: "#112203",
    name: "ليلى خالد",
    dateOfBirth: "23/8/1995",
    nationality: "سعودية",
    email: "leila.khaled3@gmail.com",
    phoneNumber: "32145003",
    gender: "female",
  },
  {
    serialNumber: "#112204",
    name: "ماجد يوسف",
    dateOfBirth: "3/1/1987",
    nationality: "سعودي",
    email: "majed.yousef4@gmail.com",
    phoneNumber: "32145004",
    gender: "male",
  },
  {
    serialNumber: "#112205",
    name: "هالة حسن",
    dateOfBirth: "17/2/1992",
    nationality: "سعودية",
    email: "hala.hassan5@gmail.com",
    phoneNumber: "32145005",
    gender: "female",
  },
  {
    serialNumber: "#112206",
    name: "فهد علي",
    dateOfBirth: "29/11/1989",
    nationality: "سعودي",
    email: "fahad.ali6@gmail.com",
    phoneNumber: "32145006",
    gender: "male",
  },
  {
    serialNumber: "#112207",
    name: "سارة ناصر",
    dateOfBirth: "8/9/1994",
    nationality: "سعودية",
    email: "sara.nasser7@gmail.com",
    phoneNumber: "32145007",
    gender: "female",
  },
  {
    serialNumber: "#112208",
    name: "زياد إبراهيم",
    dateOfBirth: "15/7/1991",
    nationality: "سعودي",
    email: "ziyad.ibrahim8@gmail.com",
    phoneNumber: "32145008",
    gender: "male",
  },
  {
    serialNumber: "#112209",
    name: "ريم فؤاد",
    dateOfBirth: "30/3/1996",
    nationality: "سعودية",
    email: "reem.fouad9@gmail.com",
    phoneNumber: "32145009",
    gender: "female",
  },
  {
    serialNumber: "#112210",
    name: "حسام مازن",
    dateOfBirth: "11/5/1985",
    nationality: "سعودي",
    email: "hossam.mazen10@gmail.com",
    phoneNumber: "32145010",
    gender: "male",
  },
  {
    serialNumber: "#112211",
    name: "نور عادل",
    dateOfBirth: "4/10/1993",
    nationality: "سعودية",
    email: "noor.adel11@gmail.com",
    phoneNumber: "32145011",
    gender: "female",
  },
  {
    serialNumber: "#112212",
    name: "راشد فهد",
    dateOfBirth: "27/6/1990",
    nationality: "سعودي",
    email: "rashed.fahad12@gmail.com",
    phoneNumber: "32145012",
    gender: "male",
  },
  {
    serialNumber: "#112213",
    name: "مها سعد",
    dateOfBirth: "9/12/1994",
    nationality: "سعودية",
    email: "maha.saad13@gmail.com",
    phoneNumber: "32145013",
    gender: "female",
  },
  {
    serialNumber: "#112214",
    name: "سامي جابر",
    dateOfBirth: "20/8/1988",
    nationality: "سعودي",
    email: "sami.jaber14@gmail.com",
    phoneNumber: "32145014",
    gender: "male",
  },
  {
    serialNumber: "#112215",
    name: "هدى طارق",
    dateOfBirth: "7/4/1992",
    nationality: "سعودية",
    email: "huda.tarek15@gmail.com",
    phoneNumber: "32145015",
    gender: "female",
  },
  {
    serialNumber: "#112216",
    name: "نواف زيد",
    dateOfBirth: "2/1/1990",
    nationality: "سعودي",
    email: "nawaf.zeid16@gmail.com",
    phoneNumber: "32145016",
    gender: "male",
  },
  {
    serialNumber: "#112217",
    name: "حنان باسم",
    dateOfBirth: "14/9/1993",
    nationality: "سعودية",
    email: "hanan.basem17@gmail.com",
    phoneNumber: "32145017",
    gender: "female",
  },
  {
    serialNumber: "#112218",
    name: "وليد أحمد",
    dateOfBirth: "19/7/1987",
    nationality: "سعودي",
    email: "waleed.ahmed18@gmail.com",
    phoneNumber: "32145018",
    gender: "male",
  },
  {
    serialNumber: "#112219",
    name: "أمل سعيد",
    dateOfBirth: "25/11/1991",
    nationality: "سعودية",
    email: "amal.saeed19@gmail.com",
    phoneNumber: "32145019",
    gender: "female",
  },
  {
    serialNumber: "#112220",
    name: "باسل كريم",
    dateOfBirth: "6/5/1989",
    nationality: "سعودي",
    email: "basel.karim20@gmail.com",
    phoneNumber: "32145020",
    gender: "male",
  },
  {
    serialNumber: "#112221",
    name: "جميلة مازن",
    dateOfBirth: "13/3/1995",
    nationality: "سعودية",
    email: "jamila.mazen21@gmail.com",
    phoneNumber: "32145021",
    gender: "female",
  },
  {
    serialNumber: "#112222",
    name: "طارق رائد",
    dateOfBirth: "5/10/1990",
    nationality: "سعودي",
    email: "tareq.raed22@gmail.com",
    phoneNumber: "32145022",
    gender: "male",
  },
  {
    serialNumber: "#112223",
    name: "رنا إياد",
    dateOfBirth: "21/2/1992",
    nationality: "سعودية",
    email: "rana.eyad23@gmail.com",
    phoneNumber: "32145023",
    gender: "female",
  },
  {
    serialNumber: "#112224",
    name: "عادل سمير",
    dateOfBirth: "9/6/1988",
    nationality: "سعودي",
    email: "adel.samir24@gmail.com",
    phoneNumber: "32145024",
    gender: "male",
  },
  {
    serialNumber: "#112225",
    name: "منى عوض",
    dateOfBirth: "2/12/1994",
    nationality: "سعودية",
    email: "mona.awad25@gmail.com",
    phoneNumber: "32145025",
    gender: "female",
  },
  {
    serialNumber: "#112226",
    name: "خالد جهاد",
    dateOfBirth: "18/7/1991",
    nationality: "سعودي",
    email: "khaled.jehad26@gmail.com",
    phoneNumber: "32145026",
    gender: "male",
  },
  {
    serialNumber: "#112227",
    name: "ميساء أحمد",
    dateOfBirth: "11/9/1993",
    nationality: "سعودية",
    email: "maysa.ahmed27@gmail.com",
    phoneNumber: "32145027",
    gender: "female",
  },
  {
    serialNumber: "#112228",
    name: "ياسر عادل",
    dateOfBirth: "16/8/1986",
    nationality: "سعودي",
    email: "yaser.adel28@gmail.com",
    phoneNumber: "32145028",
    gender: "male",
  },
  {
    serialNumber: "#112229",
    name: "إيمان سامي",
    dateOfBirth: "4/4/1995",
    nationality: "سعودية",
    email: "iman.sami29@gmail.com",
    phoneNumber: "32145029",
    gender: "female",
  },
  {
    serialNumber: "#112230",
    name: "أيمن فؤاد",
    dateOfBirth: "27/1/1989",
    nationality: "سعودي",
    email: "ayman.fouad30@gmail.com",
    phoneNumber: "32145030",
    gender: "male",
  },
];


const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(patients.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = patients.slice(startIndex, endIndex);

  // Function to change the page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

   // Generate an array of page numbers to display
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 mx-1 rounded-md transition-colors duration-200 ${
            currentPage === i ? 'bg-[#E45E47] text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

        console.log(type)
    
  return (
    <div className='min-h-screen h-fit flex justify-between bg-[#F5F5F5] relative ' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <div className='w-64 h-screen'>
            <SideBar/>
        </div>
        <div className='w-[82%] h-fit bg-[#F5F5F5] relative' dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
        <Header/>
        <div className='w-[100%] flex flex-col gap-7 items-center my-10'>
        {currentItems.map((patient, key) => (
            <Card name={patient.name} id={patient.serialNumber} birth={patient.dateOfBirth} nationality={patient.nationality} email={patient.email} phone={patient.phoneNumber} gender={patient.gender}/>
      ))}
      </div>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-3 my-5">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#EB996E] hover:bg-[#E45E47] text-white'
            }`}
          >
            <IoChevronForwardOutline size={20}/>
          </button>
          
          {renderPageNumbers()}
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#EB996E] hover:bg-[#E45E47] text-white'
            }`}
          >
            <IoChevronBackOutline size={20}/> 
          </button>
        </div>
        </div>
    </div>
  )
}

export default Patients