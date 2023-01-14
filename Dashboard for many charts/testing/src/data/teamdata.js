import { display } from '@mui/system'
import {RiChatSmile2Line,RiChatSmile3Line,RiGhostSmileLine} from 'react-icons/ri'
import {useSelector} from 'react-redux'
export const teamdatacolums=[
    {
        field:'id',headerName:'ID',flex:1,cellClassName:'idclass',
    },
    {
        field:'name',headerName:'Name',flex:2,cellClassName:'otherclass'
    },
    {
        field:'age',headerName:'Age',flex:0.5,cellClassName:'otherclass'
    },
    {
        field:'phone',headerName:'Phone Number',flex:2,cellClassName:'otherclass'
    },
    {
        field:'email',headerName:'Email',flex:2,cellClassName:'otherclass'
    },
    {
        field:'access',headerName:'Access Level',flex:2,
        renderCell:({row:{access}})=>{
            return (
                <div className='accessw'
                style={{
                    // backgroundColor:access==='id1'?`${darkcolors.formbtnbackcolor}`:`${darkcolors.greencolor}`
                    backgroundColor:access==='id1'?'rgba(63,165,137,255)':'rgba(44,126,104,255)',
                    width:'80%',
                    margin:'0 auto',
                    display:'grid',
                    placeItems:"center",
                    height:'70%',
                    borderRadius:'5px'
                }}
                >
                    {access=='id1'&&<RiChatSmile2Line style={{fontSize:'20px'}}/>}
                    {access=='id2'&&<RiChatSmile3Line style={{fontSize:'20px'}}/>}
                    {access=='id3'&&<RiGhostSmileLine style={{fontSize:'20px'}}/>}
                </div>
            )
        }
    }
]




export const teamdatarows=[
    {
        id:1,name:'Bob',age:20,phone:'(123)121-1234',email:'Bob1@qq.com',access:'id1'
    },
    {
        id:2,name:'Bob',age:30,phone:'(123)121-1234',email:'Bob2@qq.com',access:'id2'
    },
    {
        id:3,name:'Bob',age:22,phone:'(123)121-1234',email:'Bob3@qq.com',access:'id1'
    },
    {
        id:4,name:'Bob',age:20,phone:'(123)121-1234',email:'Bob4@qq.com',access:'id2'
    },
    {
        id:5,name:'Bob',age:22,phone:'(123)121-1234',email:'Bob5@qq.com',access:'id2'
    },
    {
        id:6,name:'Bob',age:25,phone:'(123)121-1234',email:'Bob6@qq.com',access:'id3'
    },
    {
        id:7,name:'Bob',age:90,phone:'(123)121-1234',email:'Bob7@qq.com',access:'id1'
    },
    {
        id:8,name:'Bob',age:77,phone:'(123)121-1234',email:'Bob8@qq.com',access:'id3'
    },
    {
        id:9,name:'Bob',age:60,phone:'(123)121-1234',email:'Bob9@qq.com',access:'id1'
    }
]