const  NavLinks=[
    {
        name:'Home',
        path:'/',
        showNav:true
    },
    {
        name:'Discussion',
        path:'/discussion',
        showNav:true
    },
    {
        name:'Profile',
        path:'/profile',
        showNav:true,
        protected:true
    },
    {
        name:'Ask AI',
        path:'/ai/askai',
        showDrop:true,
        entity:['patient'],
        protected:true
    },
    {
        name:'Predict Disease',
        path:'/ai/predict',
        showDrop:true,
        entity:['patient'],
        protected:true
    },
    {
        name:'Diet Chart',
        path:'/ai/dietchart',
        showDrop:true,
        entity:['patient'],
        protected:true
    },
    {
        name:'Test Report',
        path:'/ai/report',
        showDrop:true,
        entity:['patient'],
        protected:true
    },
    {
        name:'Prescribe',
        path:'/ai/prescribe',
        showDrop:true,
        entity:['patient'],
        protected:true
    },
    {
        name:'Doctors',
        path:'/doctor',
        showNav:true,
        entity:['patient','admin'],
        protected:true
    },
    {
        name:'Appointment',
        path:'/appointment',
        showNav:true,
        protected:true
    },
    {
        name:'Review Report',
        path:'/review',
        showNav:true,
        entity:['doctor'],
        protected:true
    },
    
    
]
export default NavLinks