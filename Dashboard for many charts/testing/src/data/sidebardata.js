import {BiBarChartAlt2,BiLineChart} from 'react-icons/bi'
import {IoPeopleCircleOutline} from 'react-icons/io5'
import {MdOutlineContactPage,MdOutlineAddLocationAlt} from 'react-icons/md'
import {TbFileInvoice} from 'react-icons/tb'
import {BsPerson} from 'react-icons/bs'
import {AiTwotoneCalendar,AiOutlinePieChart} from 'react-icons/ai'
import {RiFileUnknowLine} from 'react-icons/ri'


export const sidebardata=[
    {
        title:'Data',
        links:[
            {
                icon:<IoPeopleCircleOutline/>,
                linkname:'Manage Team',
                topath:'/team'
            },
            {
                icon:<MdOutlineContactPage/>,
                linkname:'Contacts Info',
                topath:'/contacts'
            },
            {
                icon:<TbFileInvoice/>,
                linkname:'Invoices Balen',
                topath:'/invoices'
            }
        ]
    },
    {
        title:'Pages',
        links:[
            {
                icon:<BsPerson/>,
                linkname:'Profile Form',
                topath:'/form'
            },
            {
                icon:<AiTwotoneCalendar/>,
                linkname:'Calendar',
                topath:'/calendar'
            },
            {
                icon:<RiFileUnknowLine/>,
                linkname:'FAQ Page',
                topath:'/faq'
            }
        ]
    },
    {
        title:'Charts',
        links:[
            {
                icon:<BiBarChartAlt2/>,
                linkname:'Bar Chart',
                topath:'/bar_chart'
            },
            {
                icon:<AiOutlinePieChart/>,
                linkname:'Pie Chart',
                topath:'pie_chart'
            },
            {
                icon:<BiLineChart/>,
                linkname:'Line Chart',
                topath:'/line_chart'
            },
            {
                icon:<MdOutlineAddLocationAlt/>,
                linkname:'Geo Chart',
                topath:'/geo_chart'
            }
        ]
    }
]