
import ecommerce1 from '/images/ecommerce/png/1.png';
import ecommerce2 from '/images/ecommerce/png/2.png';
import ecommerce3 from '/images/ecommerce/png/3.png';
import ecommerce4 from '/images/ecommerce/png/4.png';
import ecommerce7 from '/images/ecommerce/png/7.png';
import ecommerce8 from '/images/ecommerce/png/8.png';
import ecommerce9 from '/images/ecommerce/png/9.png';
import ecommerce10 from '/images/ecommerce/png/10.png';
import ecommerce11 from '/images/ecommerce/png/11.png';
import ecommerce12 from '/images/ecommerce/png/12.png';
import ecommerce13 from '/images/ecommerce/png/13.png';
import ecommerce14 from '/images/ecommerce/png/14.png';
import ecommerce15 from '/images/ecommerce/png/15.png';
import ecommerce16 from '/images/ecommerce/png/16.png';
import ecommerce23 from '/images/ecommerce/png/23.png';

export let orderedProducts = [
    { id: 1, image: ecommerce1, product: 'Denim Zep.Co Sweat Shirt', price: '1,299', orderId: 'SPK-1203', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['13', 'Dec'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Shipped', statusClass: "bg-success-transparent" },
    { id: 2, image: ecommerce2, product: 'Jimmy Lolfiger Jacket', price: '499', orderId: 'SPK-2936', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['25', 'Nov'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Confirmed', statusClass: "bg-primary-transparent" },
    { id: 3, image: ecommerce3, product: 'Louie Phillippe Coat', price: '1,899', orderId: 'SPK-1855', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '29,Oct 2022 - 12:47PM', deliveryStatus: 'Delivered', deliveryStatusClass: "bg-success", status: '', statusClass: "" },
    { id: 4, image: ecommerce4, product: 'Denim Corp', price: '2,499', orderId: 'SPK-1234', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '', deliveryStatus: 'Cancelled', deliveryStatusClass: "bg-danger", status: '', statusClass: "" },
    { id: 5, image: ecommerce13, product: 'Orange Watch', price: '249', orderId: 'SPK-1645', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '4,Nov 2022 - 10:24AM', deliveryStatus: 'Delivered', deliveryStatusClass: "bg-success", status: '', statusClass: "" },
    { id: 6, image: ecommerce8, product: 'Pufa Sweat Shirt', price: '2,399', orderId: 'SPK-1346', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['16', 'Jan'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Shipped', statusClass: "bg-success-transparent" },
    { id: 7, image: ecommerce9, product: 'Bluberry Co.In', price: '499', orderId: 'SPK-2936', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['19', 'Dec'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Out For Delivery', statusClass: "bg-warning-transparent" },
    { id: 8, image: ecommerce11, product: 'Garage & Co', price: '499', orderId: 'SPK-1376', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['24', 'Dec'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Shipped', statusClass: "bg-success-transparent" },
    { id: 9, image: ecommerce14, product: 'Hadimo Smart Watch(44mm)', price: '499', orderId: 'SPK-2903', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: ['16', 'Nov'], deliveredOn: '', deliveryStatus: '', deliveryStatusClass: "", status: 'Confirmed', statusClass: "bg-primary-transparent" },
    { id: 10, image: ecommerce7, product: 'BMW Denim JAcket', price: '1,899', orderId: 'SPK-1976', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '04,Nov 2022 - 03:12PM', deliveryStatus: 'Delivered', deliveryStatusClass: "bg-success", status: '', statusClass: "" },
    { id: 11, image: ecommerce16, product: 'Totoya Watch For Kids', price: '799', orderId: 'SPK-8765', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '', deliveryStatus: 'Cancelled', deliveryStatusClass: "bg-danger", status: '', statusClass: "" },
    { id: 12, image: ecommerce10, product: 'Garage & Co', price: '249', orderId: 'SPK-1645', deliveryAddress: 'mig-1-11,monroe street,georgetown,Washington D.C', deliveryData: [], deliveredOn: '22,Oct 2022 - 05:15PM', deliveryStatus: 'Delivered', deliveryStatusClass: "bg-success", status: '', statusClass: "" },
],
    productsList = [
        { id: 1, image: ecommerce1, title: 'DapZem & Co', description: 'Branded hoodie ethnic style', actualPrice: '1,799', price: '229', badge: '72% off', badgeClass: 'bg-secondary-transparent', rating: "4.2", category: ['clothing'], stock: '283', gender: 'Male', seller: 'Apilla.co.in', published: '24,Nov 2022 - 04:42PM', },
        { id: 2, image: ecommerce2, title: 'Denim Winjo', description: 'Vintage pure leather Jacket', actualPrice: '2,499', price: '599', badge: '75% off', badgeClass: 'bg-secondary-transparent', rating: "4.0", category: ['Clothing'], stock: '98', gender: 'Male', seller: 'Donzo Company', published: '18,Nov 2022 - 06:53AM', },
        { id: 3, image: ecommerce3, title: 'Jimmy Lolfiger', description: 'Winter Coat For Women', actualPrice: '299', price: '189', badge: '50% off', badgeClass: 'bg-primary-transparent', rating: "3.6", category: ['Clothing'], stock: '322', gender: 'Female', seller: 'WoodHill.co.in', published: '16,Oct 2022 - 12:45AM', },
        { id: 4, image: ecommerce4, title: 'Bluberry Co.In', description: 'Full sleeve white hoodie', actualPrice: '2,699', price: '2,499', badge: '10% off', badgeClass: 'bg-secondary-transparent', rating: "4.6", category: ['Clothing'], stock: '194', gender: 'Male,Female', seller: 'Watches.co.in', published: '12,Aug 2022 - 11:21AM', },
        { id: 5, image: ecommerce15, title: 'Orange Smart Watch', description: 'Orange Smart Watch', actualPrice: '999', price: '349', badge: '40% off', badgeClass: 'bg-secondary-transparent', rating: "4.3", category: ['Watches'], stock: '1293', gender: 'Male,Female', seller: 'SlowTrack Company', published: '21,Oct 2022 - 11:36AM', },
        { id: 6, image: ecommerce13, title: 'Watch series (44mm)', description: 'series (44mm)', actualPrice: '1,800', price: '899', badge: '50% off', badgeClass: 'bg-primary-transparent', rating: "3.4", category: ['Watches'], stock: '267', gender: 'Male,Female', seller: 'Watches.co.in', published: '05,Sep 2022 - 10:14AM', },
        { id: 7, image: ecommerce16, title: 'Ikonic Smart Watch(40mm)', description: 'Smart Watch(40mm)', actualPrice: '1,499', price: '999', badge: '30% off', badgeClass: 'bg-primary-transparent', rating: "4.3", category: ['Watches'], stock: '365', gender: 'Female', seller: 'Kohino.zaps.com', published: '27,Nov 2022 - 05:12AM', },
        { id: 8, image: ecommerce23, title: 'Apple Watch Series 5', description: 'Apple Watch Series 5', actualPrice: '2,099', price: '1,499', badge: '20% off', badgeClass: 'bg-secondary-transparent', rating: "4.8", category: ['Watches'], stock: '257', gender: 'Male,Female', seller: 'Apple Corporation', published: '29,Nov 2022 - 16:32PM', },
        { id: 9, image: ecommerce12, title: 'Sweater For Women', description: 'Sweater For Women', actualPrice: '599', price: '499', badge: '10% off', badgeClass: 'bg-secondary-transparent', rating: "3.5", category: ['Clothing'], stock: '143', gender: 'Female', seller: 'Louie Philippe', published: '18,Nov 2022 - 14:35PM', },
        { id: 10, image: ecommerce8, title: 'Pufa', description: 'Ergonic designed full sleeve coat', actualPrice: '5,699', price: '2,399', badge: '72% off', badgeClass: 'bg-primary-transparent', rating: "4.0", category: ['Clothing'], stock: '375', gender: 'Male,Female', seller: 'SlowTrack ', published: '21,Oct 2022 - 11:36AM', },
        { id: 11, image: ecommerce11, title: 'Garage & Co', description: 'Full sleeve sweat shirt', actualPrice: '1,299', price: '249', badge: '70% off', badgeClass: 'bg-primary-transparent', rating: "4.0", category: ['Clothing'], stock: '145', gender: 'Male,Female', seller: 'WoodHill', published: '24,Nov 2022 - 04:42PM', },
        { id: 12, image: ecommerce9, title: 'Louie Phillippe', description: 'Ergonic green colored full sleeve jacket', actualPrice: '3,299', price: '1,899', badge: '60% off', badgeClass: 'bg-secondary-transparent', rating: " 4.0", category: ['Clothing'], stock: '214', gender: 'Male,Female', seller: 'Donzo', published: '18,Nov 2022 - 14:35PM', },
    ]