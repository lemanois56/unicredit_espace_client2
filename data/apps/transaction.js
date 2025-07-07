import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import Bitcoin from "/images/crypto-currencies/regular/Bitcoin.svg";
import Ethereum from "/images/crypto-currencies/regular/Ethereum.svg";
import Dash from "/images/crypto-currencies/regular/Dash.svg";
import Euro from "/images/crypto-currencies/regular/Euro.svg";
import litecoin from "/images/crypto-currencies/regular/litecoin.svg";
import Ripple from "/images/crypto-currencies/regular/Ripple.svg";
import Golem from "/images/crypto-currencies/regular/Golem.svg";
import Monero from "/images/crypto-currencies/regular/monero.svg";
import Zcash from "/public/images/crypto-currencies/regular/Zcash.svg";
import Decred from "/public/images/crypto-currencies/regular/Decred.svg";

export let
    stackedTransactionSeries = [
        {
            name: "New",
            data: [76, 85, 101, 98, 87, 105],
        },
        {
            name: "Pending",
            data: [35, 41, 36, 26, 45, 48],
        },
        {
            name: "Completed",
            data: [44, 55, 57, 56, 61, 58],
        },
        {
            name: "Inprogress",
            data: [13, 27, 31, 29, 35, 25],
        },
    ],
    stackedTransactionChartOptions = {
        chart: {
            type: "bar",
            height: 210,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "25%",
                endingShape: "rounded",
            },
        },
        grid: {
            borderColor: "#f2f5f7",
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            enabled: true,
        },
        colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
        stroke: {
            show: true,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            title: {
                style: {
                    color: "#8c9097",
                },
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        fill: {
            opacity: 1,
        },
    },

    transactionsData = [
        { id: 1, arrowTextColor: "success", arrowDirection: "up", sendersrc: face10, senderName: "Json Taylor", transactionHash: "1242232401", coinSrc: Bitcoin, coinName: "Bitcoin", date: "24,Jul 2023 - 4:23PM", amount: "+0.041", amountColor: "success", receiver: "Texas Steel", statusBadgeText: "Success", statusBadgeColor: "success" },
        { id: 2, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face5, senderName: "Samantha Taylor", transactionHash: "1242232402", coinSrc: Dash, coinName: "Dashcoin", date: "20,Jul 2023 - 12:47PM", amount: "-0.284", amountColor: "danger", receiver: "	Stuart Little", statusBadgeText: "Pending", statusBadgeColor: "warning" },
        { id: 3, arrowTextColor: "success", arrowDirection: "up", sendersrc: face12, senderName: "Brian Jhonson", transactionHash: "1242232403", coinSrc: Euro, coinName: "Euro", date: "14,Aug 2023 - 10:25AM", amount: "+0.943", amountColor: "success", receiver: "Melissa Smith", statusBadgeText: "Success", statusBadgeColor: "success" },
        { id: 4, arrowTextColor: "success", arrowDirection: "up", sendersrc: face15, senderName: "Liam Anderson", transactionHash: "1242232404", coinSrc: Ethereum, coinName: "Etherium", date: "10,Jul 2023 - 4:14PM", amount: "+0.582", amountColor: "success", receiver: "Alexander Clark", statusBadgeText: "Failed", statusBadgeColor: "danger" },
        { id: 5, arrowTextColor: "success", arrowDirection: "up", sendersrc: face4, senderName: "Isabella Brown", transactionHash: "1242232405", coinSrc: Golem, coinName: "Golem", date: "19,Aug 2023 - 11:35AM	", amount: "+0.290", amountColor: "success", receiver: "Elijah Davis", statusBadgeText: "Success", statusBadgeColor: "success" },
        { id: 6, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face7, senderName: "Sophia Lee", transactionHash: "1242232406", coinSrc: litecoin, coinName: "Litecoin", date: "12,Jun 2023 - 2:45PM", amount: "-0.147", amountColor: "danger", receiver: "Harper Taylor	", statusBadgeText: "Success", statusBadgeColor: "success" },
        { id: 7, arrowTextColor: "success", arrowDirection: "up", sendersrc: face6, senderName: "Evelyn Clark", transactionHash: "1242232407", coinSrc: Ripple, coinName: "Ripple", date: "27,Jul 2023 - 10:18AM", amount: "+1.05", amountColor: "success", receiver: "William Brown", statusBadgeText: "Success", statusBadgeColor: "success" },
        { id: 8, arrowTextColor: "success", arrowDirection: "up", sendersrc: face11, senderName: "Liam Anderson", transactionHash: "1242232408", coinSrc: Monero, coinName: "Monero", date: "16,Aug 2023 - 9:25PM	", amount: "+0.625", amountColor: "success", receiver: "Amelia Davis", statusBadgeText: "Inprogress", statusBadgeColor: "info" },
        { id: 9, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face2, senderName: "Harper Taylor", transactionHash: "1242232409", coinSrc: Zcash, coinName: "Zcash", date: "24,Jul 2023 - 12:47PM", amount: "-0.293", amountColor: "danger", receiver: "Benjamin Martinez	", statusBadgeText: "Inprogress", statusBadgeColor: "info" },
        { id: 10, arrowTextColor: "success", arrowDirection: "up", sendersrc: face16, senderName: "Lucas Taylor", transactionHash: "1242232410", coinSrc: Decred, coinName: "Decred", date: "24,Jul 2023 - 12:47PM", amount: "+0.893", amountColor: "success", receiver: "Mia Wilson", statusBadgeText: "Success", statusBadgeColor: "success" },
    ],
    transactions = [
        {
            title: 'New Transactions',
            badgeClass: 'primary',
            badgeCount: "1,2345",
            countEndValue: 43,
            lastYearLabel: 'Last Year',
            percentageChange: 3.25,
            percentageClass: 'text-success',
            arrowIconClass: 'up',
            arrowDirection: 'up',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                      class="svg-primary">
                      <path
                          d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
                  </svg>`
        },
        {
            title: 'Completed Transactions',
            badgeClass: 'success',
            badgeCount: "4,176",
            countEndValue: 320,
            lastYearLabel: 'Last Year',
            percentageChange: -1.16,
            percentageClass: 'text-danger',
            arrowIconClass: 'down',
            arrowDirection: 'down',
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-success">
                        <path
                            d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                    </svg>`
        },
        {
            title: 'Pending Transactions',
            badgeClass: 'warning',
            badgeCount: "7,064",
            countEndValue: 82,
            lastYearLabel: 'Last Year',
            percentageChange: 0.25,
            percentageClass: 'text-success',
            arrowIconClass: 'up',
            arrowDirection: 'up',
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                        class="svg-warning">
                        <path
                            d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                    </svg>`
        },
        {
            title: 'Inprogress Transactions',
            badgeClass: 'secondary',
            badgeCount: "1,105",
            countEndValue: 33,
            lastYearLabel: 'Last Year',
            percentageChange: 0.46,
            percentageClass: 'text-success',
            arrowIconClass: 'down',
            arrowDirection: 'down',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                      class="svg-secondary">
                      <path
                          d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                  </svg>`
        }
    ]