import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const [formSubmitted,setFormSubmitted] = useState(false);
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        subject:'',
        message:'',
    });

    
}