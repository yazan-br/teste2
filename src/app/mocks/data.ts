const substituteTeacher = [
    {
        type: "SectionWithChildren",
        props: {

            childrenClassName: "",
            className: "w-full h-20 bg-white",
            position: "left",
            verticalPosition: "middle",
            children: {
                type: "Image",
                props: {
                    className: "p-1",
                    src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/df471456-copilot-blue-orange-png-1_108101j000000000000028.png",
                    alt: "Alternative text for the image",
                    width: 270,
                    height: 270,
                },
            },
            
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
            },
            position: "centered middle",
            tailWindClasses: "md:h-[63vh] h-[84vh]",
            children: [
                {
                    type: "div",
                    props: {
                        className: "flex flex-col md:flex-row gap-6 md:items-center md:justify-between w-full px-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white max-w-xl text-left",
                                    children: [
                                        {
                                            type: "h1",
                                            props: {
                                                className: "font-bold text-[38px] leading-[58px] md:max-w-[353px]",
                                                children: "Inspire the Future. Teach Today.",
                                            },
                                        },
                                        {
                                            type: "div",
                                            props: {
                                                className: "font-normal text-base leading-[29px] md:text-[22px] md:max-w-[422.3px] pt-4",
                                                children: "Join our team of dedicated substitute teachers and build your career. Apply today to explore opportunities across our open positions.",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "md:w-1/2 w-full p-6 rounded shadow",
                                    children: {
                                        type: "MultiStepFormPage",
                                        props: {
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
               
            ],
        },
    },

    {
        type: "Testimonial",
        props: {
            id: 1,
            containerClassName: " md:pt-[60px] md:pb-[70px]",
            eyebrowClasses: "text-blue-600 font-bold text-xs",
            eyebrowText: "THE PERFECT LAUNCHPAD",
            imageClassName: "",
            imageHeight: "441",
            imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/eb530c7f-adobestock-504129720-1_10ek09q0c909q02b000028.png",
            imageWidth: "350",
            separatorClassName: "",
            separatorImageProps: {
                separatorHeight: "40",
                separatorWidth: "30",
                srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
            },
            text: "Are you passionate about molding young minds? Are you looking for a flexible career that makes a real difference? As a substitute teacher, you'll have the chance to inspire students, foster their curiosity, and guide their growth while benefiting from a rewarding and adaptable work environment.",
            textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] md:text-left",
            textContentType: "paragraph",
            textPosition: "left",
            textUnderSeparator: "",
            textUnderSeparatorClasses: "",
            title: "Start Teaching and Build Your Career.",
            titleClassName: "font-sans font-bold text-[26px] leading-[42px] text-center md:text-left max-w-[40rem]",
        },
    },
    {
        type: "div",
        props: {
            className: "pt-10 pb-10 flex items-center justify-center",
            children: [
                {
                    type: "div",
                    props: {
                        className: "w-[940px] flex flex-col md:flex-row md:items-center md:justify-center",
                        children: [
                            {
                                type: "InfoGrid",
                                props: {
                                    cardClassName: "bg-white p-4",
                                    columns: 3,
                                    containerClassName: "",
                                    eyebrowText: "THE BENEFITS",
                                    gridClassName: "gap-10",
                                    items: [
                                        {
                                            cardSubtitle: "Our in-depth training program ensures you're well-equipped to step into any classroom.",
                                            cardTitle: "Comprehensive Training",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/95689af3-noun-training-4257179-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Enjoy consistent backing from our team, ensuring you're never alone on your teaching journey.",
                                            cardTitle: "Ongoing Support",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/k2f20i-icon-5_1000000000000000000028.png",
                                        },
                                        {
                                            cardSubtitle: "You're eligible for excellent health benefits to keep you thriving inside and outside the classroom.",
                                            cardTitle: "Health Benefits",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/04d73c96-noun-health-1567122-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "With our exciting bonus opportunities, you're regularly rewarded for your dedication.",
                                            cardTitle: "Bonus Opportunities",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/7450174b-noun-bonus-1992113-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Choose assignments that fit your schedule and enjoy the work-life balance you've been searching for.",
                                            cardTitle: "Flexible Scheduling",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a2c9764c-noun-schedule-5806583-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "We provide a competitive salary on a weekly basis.",
                                            cardTitle: "Weekly Pay",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b7a9b638-noun-paycheck-5260806-9498fe.svg",
                                        },
                                    ],
                                    layout: "horizontal",
                                    separatorImageUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/orxjhm-section-line_1000000000000000000028.png",
                                    subtitleClassName: "text-gray-500 pt-5 font-normal text-[13px] md:max-w-[14rem] leading-[25px] text-left",
                                    svgClassName: "w-10 h-10",
                                    title: "Why Become A Substitute Teacher",
                                    titleClassName: "text-gray-700 font-bold",
                                    separatorHeight: "10",
                                    separatorWidth: "30",
                                    eyebrowClasses: "flex items-center justify-center font-bold pb-5 text-blue-600 font-bold text-xs",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "bg-custom-gray",
            children: [
                {
                    type: "Testimonial",
                    props: {
                        id: 2,
                        title: "Who We're Looking For",
                        textUnderSeparator: "We're seeking dedicated individuals who are:",
                        containerClassName: "md:pt-[60px] pb-[70px] md:gap-10",
                        eyebrowClasses: "text-blue-600 font-bold text-xs",
                        eyebrowText: "REQUIREMENTS",
                        imageClassName: "",
                        imageHeight: "441",
                        imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/2e76c9d5-adobestock-212883769-1-1_10fm0ah0cj09q00i000028.png",
                        imageWidth: "350",
                        separatorClassName: "",
                        separatorImageProps: {
                            separatorHeight: "40",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                        text: [
                            "Passionate about education",
                            "Excellent communicators",
                            "Adaptable to different learning environments",
                            "Responsible and reliable",
                        ],
                        textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] pl-10 md:pl-0 text-left pt-10",
                        textContentType: "unordered-list",
                        textPosition: "right",
                        
                        textUnderSeparatorClasses: "",
                        
                        titleClassName: "font-sans font-bold text-[26px] leading-[42px] md:text-left",
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "pb-10",
            children: [
                {
                    type: "TestimonialFromClients",
                    props: {
                        cardContainerClassName: "text-center ",
                        title: "Hear From Other Substitutes We've Hired",
                        cards: [
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/85682539-michael-s-1_102802p028028000008028.png",
                                clientName: "Mark S.",
                                clientTitle: "Fort Worth, TX",
                                subtitle: "I've been a sub in a special ed class for 3 weeks now. It's really great helping the kids.",
                                title: "An Amazing Opportunity",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a4504acf-sarah-t-1_102802q028028000009028.png",
                                clientName: "Vera D.",
                                clientTitle: "Camden, NJ",
                                subtitle: "I've had an amazing experience. The kids were absolutely awesome. I've had some authentic experiences already!",
                                title: "Authentic Experiences",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/8ac6496b-carlos-g-1_102d028028028002000028.png",
                                clientName: "Bryce V.",
                                clientTitle: "Birmingham, AL",
                                subtitle: "Can I recommend this to friends?! I have a few that are interested. I've been loving the job and am telling everyone!",
                                title: "100% Recommend",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] ",
                                cardContainerClassName: "p-1",
                            },
                        ],
                        containerClassName: "p-6",
                        eyebrowClasses: "text-blue-600 font-bold text-xs mb-4",
                        eyebrowText: "Testimonials",
                        gridColumns: 3,
                        separatorClassName: "mb-[2rem] -mt-[1.8rem]",
                        separatorImageProps: {
                            separatorHeight: "30",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                   
                        titleClasses: "text-2xl font-bold ",
                    },
                },
            ],
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
            },
            position: "centered middle",
            tailWindClasses: "h-96",
            children: [
                {
                    type: "div",
                    props: {
                        className: "max-w-3xl grid gap-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-sans font-extrabold text-[26px] leading-[42px] text-center",
                                    children: "Apply Now to Become a Substitute Teacher.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-bold text-base leading-[29px] text-center",
                                    children: "Join our team of dedicated substitute teachers. Start making a difference in the lives of students, enjoy flexible work, and earn money now.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    children: [
                                        {
                                            type: "a",
                                            props: {
                                                href: "#tag1",
                                                className: "p-3 px-10 bg-[rgba(18,104,207,1)] text-white text-center text-[16px] leading-[19px] font-semibold rounded-[2px] border-none shadow-none hover:bg-[rgba(14,88,197,1)] hover:shadow-none hover:text-white",
                                                children: "START TEACHING",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-[152px] text-xs text-center bg-[rgba(27,27,27,1)]",
            position: "center",
            verticalPosition: "middle",
            children: [
                {
                    type: "Image",
                    props: {
                        className: "p-1",
                        src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b86553c2-copilot-white-png_10jo03s000000000000028.png",
                        alt: "Alternative text for the image",
                        width: 350,
                        height: 350,
                    },
                },
                {
                    type: "div",
                    props: {
                        className: "pt-5 text-gray-300 text-[10px]",
                        children: "2024 © Copilot Careers. All rights reserved.",
                    },
                },
            ],
        },
    },
];

const paraProfessional = [
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-20 bg-white",
            position: "left",
            verticalPosition: "middle",
            children: {
                type: "Image",
                props: {
                    className: "p-1",
                    src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/df471456-copilot-blue-orange-png-1_108101j000000000000028.png",
                    alt: "Alternative text for the image",
                    width: 270,
                    height: 270,
                },
            },
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
            },
            position: "centered middle",
            tailWindClasses: "md:h-[63vh] h-[84vh]",
            children: [
                {
                    type: "div",
                    props: {
                        className: "flex flex-col md:flex-row gap-6 md:items-center md:justify-between w-full px-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white max-w-xl text-left",
                                    children: [
                                        {
                                            type: "h1",
                                            props: {
                                                className: "font-bold text-[38px] leading-[58px] md:max-w-[353px]",
                                                children: "Inspire the Future. Teach Today.",
                                            },
                                        },
                                        {
                                            type: "div",
                                            props: {
                                                className: "font-normal text-base leading-[29px] md:text-[22px] md:max-w-[422.3px] pt-4",
                                                children: "Join our team of dedicated Paraprofessionals and build your career. Apply today to explore opportunities across our open positions.",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "md:w-1/2 w-full p-6 rounded shadow",
                                    children: {
                                        type: "MultiStepFormPage",
                                        props: {
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "Testimonial",
        props: {
            id: 1,
            containerClassName: " md:pt-[60px] md:pb-[70px]",
            eyebrowClasses: "text-blue-600 font-bold text-xs",
            eyebrowText: "THE PERFECT LAUNCHPAD",
            title: "Start Teaching and Build Your Career.",
            imageClassName: "",
            imageHeight: "441",
            imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/eb530c7f-adobestock-504129720-1_10ek09q0c909q02b000028.png",
            imageWidth: "350",
            separatorClassName: "",
            separatorImageProps: {
                separatorHeight: "40",
                separatorWidth: "30",
                srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
            },
            text: "Are you passionate about molding young minds? Are you looking for a flexible career that makes a real difference? As a ParaProfessional you'll have the chance to inspire students, foster their curiosity, and guide their growth while benefiting from a rewarding and adaptable work environment.",
            textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] md:text-left",
            textContentType: "paragraph",
            textPosition: "left",
            textUnderSeparator: "",
            textUnderSeparatorClasses: "",
            
            titleClassName: "font-sans font-bold text-[26px] leading-[42px] text-center md:text-left max-w-[40rem]",
        },
    },
    {
        type: "div",
        props: {
            className: "pt-10 pb-10 flex items-center justify-center",
            children: [
                {
                    type: "div",
                    props: {
                        className: "w-[940px] flex flex-col md:flex-row md:items-center md:justify-center",
                        children: [
                            {
                                type: "InfoGrid",
                                props: {
                                    cardClassName: "bg-white p-4",
                                    columns: 3,
                                    containerClassName: "",
                                    eyebrowText: "THE BENEFITS",
                                    gridClassName: "gap-10",
                                    items: [
                                        {
                                            cardTitle: "Comprehensive Training",
                                            cardSubtitle: "Our in-depth training program ensures you're well-equipped to step into any classroom.",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/95689af3-noun-training-4257179-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Enjoy consistent backing from our team, ensuring you're never alone on your teaching journey.",
                                            cardTitle: "Ongoing Support",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/k2f20i-icon-5_1000000000000000000028.png",
                                        },
                                        {
                                            cardSubtitle: "You're eligible for excellent health benefits to keep you thriving inside and outside the classroom.",
                                            cardTitle: "Health Benefits",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/04d73c96-noun-health-1567122-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "With our exciting bonus opportunities, you're regularly rewarded for your dedication.",
                                            cardTitle: "Bonus Opportunities",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/7450174b-noun-bonus-1992113-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Choose assignments that fit your schedule and enjoy the work-life balance you've been searching for.",
                                            cardTitle: "Flexible Scheduling",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a2c9764c-noun-schedule-5806583-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "We provide a competitive salary on a weekly basis.",
                                            cardTitle: "Weekly Pay",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b7a9b638-noun-paycheck-5260806-9498fe.svg",
                                        },
                                    ],
                                    layout: "horizontal",
                                    separatorImageUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/orxjhm-section-line_1000000000000000000028.png",
                                    subtitleClassName: "text-gray-500 pt-5 font-normal text-[13px] md:max-w-[14rem] leading-[25px] text-left",
                                    svgClassName: "w-10 h-10",
                                    title: "Why Become A Substitute Teacher",
                                    titleClassName: "text-gray-700 font-bold",
                                    separatorHeight: "10",
                                    separatorWidth: "30",
                                    eyebrowClasses: "flex items-center justify-center font-bold pb-5 text-blue-600 font-bold text-xs",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "bg-custom-gray",
            children: [
                {
                    type: "Testimonial",
                    props: {
                        id: 2,
                        eyebrowText: "REQUIREMENTS",
                        title: "Who We're Looking For",
                        textUnderSeparator: "We're seeking dedicated individuals who are:",
                        imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/2e76c9d5-adobestock-212883769-1-1_10fm0ah0cj09q00i000028.png",
                        text: [
                            "Passionate about education",
                            "Excellent communicators",
                            "Adaptable to different learning environments",
                            "Responsible and reliable",
                        ],
                        containerClassName: "md:pt-[60px] pb-[70px] md:gap-10",
                        eyebrowClasses: "text-blue-600 font-bold text-xs",
                        imageClassName: "",
                        imageHeight: "441",
                        imageWidth: "350",
                        separatorClassName: "",
                        separatorImageProps: {
                            separatorHeight: "40",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                        textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] pl-10 md:pl-0 text-left pt-10",
                        textContentType: "unordered-list",
                        textPosition: "right",
                        textUnderSeparatorClasses: "",
                        titleClassName: "font-sans font-bold text-[26px] leading-[42px] md:text-left",
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "pb-10",
            children: [
                {
                    type: "TestimonialFromClients",
                    props: {
                        cardContainerClassName: "text-center",
                        title: "Hear From Other Paraprofessionals We've Hired",
                        cards: [
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/85682539-michael-s-1_102802p028028000008028.png",
                                clientName: "Mark S.",
                                clientTitle: "Fort Worth, TX",
                                subtitle: "I've been a sub in a special ed class for 3 weeks now. It's really great helping the kids.",
                                title: "An Amazing Opportunity",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a4504acf-sarah-t-1_102802q028028000009028.png",
                                clientName: "Vera D.",
                                clientTitle: "Camden, NJ",
                                subtitle: "I've had an amazing experience. The kids were absolutely awesome. I've had some authentic experiences already!",
                                title: "Authentic Experiences",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/8ac6496b-carlos-g-1_102d028028028002000028.png",
                                clientName: "Bryce V.",
                                clientTitle: "Birmingham, AL",
                                subtitle: "Can I recommend this to friends?! I have a few that are interested. I've been loving the job and am telling everyone!",
                                title: "100% Recommend",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] ",
                                cardContainerClassName: "p-1",
                            },
                        ],
                        containerClassName: "p-6",
                        eyebrowClasses: "text-blue-600 font-bold text-xs mb-4",
                        eyebrowText: "Testimonials",
                        gridColumns: 3,
                        separatorClassName: "mb-[2rem] -mt-[1.8rem]",
                        separatorImageProps: {
                            separatorHeight: "30",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                   
                        titleClasses: "text-2xl font-bold ",
                    },
                },
            ],
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
            },
            position: "centered middle",
            tailWindClasses: "h-96",
            children: [
                {
                    type: "div",
                    props: {
                        className: "max-w-3xl grid gap-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-sans font-extrabold text-[26px] leading-[42px] text-center",
                                    children: "Apply Now to Become a ParaProfessional.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-bold text-base leading-[29px] text-center",
                                    children: "Join our team of dedicated ParaProfessionals. Start making a difference in the lives of students, enjoy flexible work, and earn money now.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    children: [
                                        {
                                            type: "a",
                                            props: {
                                                href: "#tag1",
                                                className: "p-3 px-10 bg-[rgba(18,104,207,1)] text-white text-center text-[16px] leading-[19px] font-semibold rounded-[2px] border-none shadow-none hover:bg-[rgba(14,88,197,1)] hover:shadow-none hover:text-white",
                                                children: "START TEACHING",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-[152px] text-xs text-center bg-[rgba(27,27,27,1)]",
            position: "center",
            verticalPosition: "middle",
            children: [
                {
                    type: "Image",
                    props: {
                        className: "p-1",
                        src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b86553c2-copilot-white-png_10jo03s000000000000028.png",
                        alt: "Alternative text for the image",
                        width: 350,
                        height: 350,
                    },
                },
                {
                    type: "div",
                    props: {
                        className: "pt-5 text-gray-300 text-[10px]",
                        children: "2024 © Copilot Careers. All rights reserved.",
                    },
                },
            ],
        },
    },
];

const childNutrition = [
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-20 bg-white",
            position: "left",
            verticalPosition: "middle",
            children: {
                type: "Image",
                props: {
                    className: "p-1",
                    src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/df471456-copilot-blue-orange-png-1_108101j000000000000028.png",
                    alt: "Alternative text for the image",
                    width: 270,
                    height: 270,
                },
            },
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
            },
            position: "centered middle",
            tailWindClasses: "md:h-[63vh] h-[84vh]",
            children: [
                {
                    type: "div",
                    props: {
                        className: "flex flex-col md:flex-row gap-6 md:items-center md:justify-between w-full px-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white max-w-xl text-left",
                                    children: [
                                        {
                                            type: "h1",
                                            props: {
                                                className: "font-bold text-[38px] leading-[58px] md:max-w-[353px]",
                                                children: "Nourish the Future. Join Our Child Nutrition Team.",
                                            },
                                        },
                                        {
                                            type: "div",
                                            props: {
                                                className: "font-normal text-base leading-[29px] md:text-[22px] md:max-w-[422.3px] pt-4",
                                                children: "Become a vital part of our mission to provide healthy meals to students. Apply today to explore opportunities across our open positions.",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "md:w-1/2 w-full p-6 rounded shadow",
                                    children: {
                                        type: "MultiStepFormPage",
                                        props: {
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "Testimonial",
        props: {
            id: 1,
            containerClassName: " md:pt-[60px] md:pb-[70px]",
            eyebrowClasses: "text-blue-600 font-bold text-xs",
            eyebrowText: "FUELING YOUNG MINDS",
            title: "Start Your Career in Child Nutrition.",
            text: "Are you passionate about promoting healthy eating habits among children? As a Child Nutrition Specialist, you'll have the opportunity to plan and implement nutritious meal programs, educate students on healthy choices, and ensure compliance with federal and state nutrition guidelines.",
            imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/eb530c7f-adobestock-504129720-1_10ek09q0c909q02b000028.png",
            imageClassName: "",
            imageHeight: "441",
            imageWidth: "350",
            separatorClassName: "",
            separatorImageProps: {
                separatorHeight: "40",
                separatorWidth: "30",
                srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
            },
         
            textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] md:text-left",
            textContentType: "paragraph",
            textPosition: "left",
            textUnderSeparator: "",
            textUnderSeparatorClasses: "",
            
            titleClassName: "font-sans font-bold text-[26px] leading-[42px] text-center md:text-left max-w-[40rem]",
        },
    },
    {
        type: "div",
        props: {
            className: "pt-10 pb-10 flex items-center justify-center",
            children: [
                {
                    type: "div",
                    props: {
                        className: "w-[940px] flex flex-col md:flex-row md:items-center md:justify-center",
                        children: [
                            {
                                type: "InfoGrid",
                                props: {
                                    cardClassName: "bg-white p-4",
                                    columns: 3,
                                    containerClassName: "",
                                    gridClassName: "gap-10",
                                    eyebrowText: "THE BENEFITS",
                                    title: "Why Become A Substitute Teacher",
                                    items: [
                                        {
                                            cardTitle: "Comprehensive Training",
                                            cardSubtitle: "Our in-depth training program ensures you're well-equipped to step into any classroom.",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/95689af3-noun-training-4257179-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Enjoy consistent backing from our team, ensuring you're never alone on your teaching journey.",
                                            cardTitle: "Ongoing Support",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/k2f20i-icon-5_1000000000000000000028.png",
                                        },
                                        {
                                            cardSubtitle: "You're eligible for excellent health benefits to keep you thriving inside and outside the classroom.",
                                            cardTitle: "Health Benefits",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/04d73c96-noun-health-1567122-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "With our exciting bonus opportunities, you're regularly rewarded for your dedication.",
                                            cardTitle: "Bonus Opportunities",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/7450174b-noun-bonus-1992113-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Choose assignments that fit your schedule and enjoy the work-life balance you've been searching for.",
                                            cardTitle: "Flexible Scheduling",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a2c9764c-noun-schedule-5806583-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "We provide a competitive salary on a weekly basis.",
                                            cardTitle: "Weekly Pay",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b7a9b638-noun-paycheck-5260806-9498fe.svg",
                                        },
                                    ],
                                    layout: "horizontal",
                                    separatorImageUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/orxjhm-section-line_1000000000000000000028.png",
                                    subtitleClassName: "text-gray-500 pt-5 font-normal text-[13px] md:max-w-[14rem] leading-[25px] text-left",
                                    svgClassName: "w-10 h-10",
                                    titleClassName: "text-gray-700 font-bold",
                                    separatorHeight: "10",
                                    separatorWidth: "30",
                                    eyebrowClasses: "flex items-center justify-center font-bold pb-5 text-blue-600 font-bold text-xs",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "bg-custom-gray",
            children: [
                {
                    type: "Testimonial",
                    props: {
                        id: 2,
                        eyebrowText: "REQUIREMENTS",
                        title: "Who We're Looking For",
                        textUnderSeparator: "We're seeking dedicated individuals who are:",
                        text: [
                            "Passionate about child nutrition",
                            "Excellent communicators",
                            "Knowledgeable about federal and state nutrition guidelines",
                            "Organized and detail-oriented",
                            "Committed to promoting healthy eating habits"
                        ],
                        imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/2e76c9d5-adobestock-212883769-1-1_10fm0ah0cj09q00i000028.png",
                        textContentType: "unordered-list",
                        containerClassName: "md:pt-[60px] pb-[70px] md:gap-10",
                        eyebrowClasses: "text-blue-600 font-bold text-xs",
                        imageClassName: "",
                        imageHeight: "441",
                        imageWidth: "350",
                        separatorClassName: "",
                        separatorImageProps: {
                            separatorHeight: "40",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                        textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] pl-10 md:pl-0 text-left pt-10",
                        textPosition: "right",
                        textUnderSeparatorClasses: "",
                        titleClassName: "font-sans font-bold text-[26px] leading-[42px] md:text-left",
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "pb-10",
            children: [
                {
                    type: "TestimonialFromClients",
                    props: {
                        cardContainerClassName: "text-center",
                        title: "Hear From Our Child Nutrition Specialists",
                        cards: [
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/85682539-michael-s-1_102802p028028000008028.png",
                                clientName: "Mark S.",
                                clientTitle: "Fort Worth, TX",
                                subtitle: "Working as a Child Nutrition Specialist has been incredibly rewarding. I love knowing that I'm making a difference in students' lives every day.",
                                title: "An Amazing Opportunity",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] mt-5",
                                cardContainerClassName: "p-1 min-h-[180px]",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a4504acf-sarah-t-1_102802q028028000009028.png",
                                clientName: "Vera D.",
                                clientTitle: "Camden, NJ",
                                subtitle: "I've had an amazing experience. The kids were absolutely awesome. I've had some authentic experiences already!",
                                title: "Authentic Experiences",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] mt-5",
                                cardContainerClassName: "p-1 min-h-[180px]",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/8ac6496b-carlos-g-1_102d028028028002000028.png",
                                clientName: "Bryce V.",
                                clientTitle: "Birmingham, AL",
                                subtitle: "Can I recommend this to friends?! I have a few that are interested. I've been loving the job and am telling everyone!",
                                title: "100% Recommend",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] mt-5",
                                cardContainerClassName: "p-1 min-h-[180px]",
                            },
                        ],
                        containerClassName: "p-6",
                        eyebrowClasses: "text-blue-600 font-bold text-xs mb-4",
                        eyebrowText: "Testimonials",
                        gridColumns: 3,
                        separatorClassName: "mb-[2rem] -mt-[1.8rem]",
                        separatorImageProps: {
                            separatorHeight: "30",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                   
                        titleClasses: "text-2xl font-bold ",
                    },
                },
            ],
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
            },
            position: "centered middle",
            tailWindClasses: "h-96",
            children: [
                {
                    type: "div",
                    props: {
                        className: "max-w-3xl grid gap-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-sans font-extrabold text-[26px] leading-[42px] text-center",
                                    children: "Apply Now to Become a Child Nutrition Specialist.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-bold text-base leading-[29px] text-center",
                                    children: "Join our team dedicated to promoting healthy eating habits among students. Start making a difference, enjoy flexible work, and earn money now.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    children: [
                                        {
                                            type: "a",
                                            props: {
                                                href: "#tag1",
                                                className: "p-3 px-10 bg-[rgba(18,104,207,1)] text-white text-center text-[16px] leading-[19px] font-semibold rounded-[2px] border-none shadow-none hover:bg-[rgba(14,88,197,1)] hover:shadow-none hover:text-white",
                                                children: "START YOUR APPLICATION",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-[152px] text-xs text-center bg-[rgba(27,27,27,1)]",
            position: "center",
            verticalPosition: "middle",
            children: [
                {
                    type: "Image",
                    props: {
                        className: "p-1",
                        src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b86553c2-copilot-white-png_10jo03s000000000000028.png",
                        alt: "Alternative text for the image",
                        width: 350,
                        height: 350,
                    },
                },
                {
                    type: "div",
                    props: {
                        className: "pt-5 text-gray-300 text-[10px]",
                        children: "2024 © Copilot Careers. All rights reserved.",
                    },
                },
            ],
        },
    },
];

const substituteCustodian = [
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-20 bg-white",
            position: "left",
            verticalPosition: "middle",
            children: {
                type: "Image",
                props: {
                    className: "p-1",
                    src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/df471456-copilot-blue-orange-png-1_108101j000000000000028.png",
                    alt: "Alternative text for the image",
                    width: 270,
                    height: 270,
                },
            },
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/c806eb51-adobestock-436772126-1_10000000xc0m1000004028.png",
            },
            position: "centered middle",
            tailWindClasses: "md:h-[63vh] h-[84vh]",
            children: [
                {
                    type: "div",
                    props: {
                        className: "flex flex-col md:flex-row gap-6 md:items-center md:justify-between w-full px-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white max-w-xl text-left",
                                    children: [
                                        {
                                            type: "h1",
                                            props: {
                                                className: "font-bold text-[38px] leading-[58px] md:max-w-[353px]",
                                                children: "Maintain Excellence. Join Our Custodial Team.",
                                            },
                                        },
                                        {
                                            type: "div",
                                            props: {
                                                className: "font-normal text-base leading-[29px] md:text-[22px] md:max-w-[422.3px] pt-4",
                                                children: "Become an essential part of our mission to provide clean and safe learning environments. Apply today to explore opportunities across our open positions.",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "md:w-1/2 w-full p-6 rounded shadow",
                                    children: {
                                        type: "MultiStepFormPage",
                                        props: {
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "Testimonial",
        props: {
            id: 1,
            containerClassName: " md:pt-[60px] md:pb-[70px]",
            eyebrowClasses: "text-blue-600 font-bold text-xs",
            eyebrowText: "ENSURING CLEAN AND SAFE LEARNING SPACES",
            title: "Start Your Career as a Substitute Custodian.",
            text: "Are you dedicated to maintaining cleanliness and safety in educational environments? As a Substitute Custodian, you'll play a crucial role in ensuring that school facilities are clean, safe, and functional, allowing students to focus on learning in a healthy environment.",
            imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/eb530c7f-adobestock-504129720-1_10ek09q0c909q02b000028.png",
            imageClassName: "",
            imageHeight: "441",
            imageWidth: "350",
            separatorClassName: "",
            separatorImageProps: {
                separatorHeight: "40",
                separatorWidth: "30",
                srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
            },
         
            textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] md:text-left",
            textContentType: "paragraph",
            textPosition: "left",
            textUnderSeparator: "",
            textUnderSeparatorClasses: "",
            
            titleClassName: "font-sans font-bold text-[26px] leading-[42px] text-center md:text-left max-w-[40rem]",
        },
    },
    {
        type: "div",
        props: {
            className: "pt-10 pb-10 flex items-center justify-center",
            children: [
                {
                    type: "div",
                    props: {
                        className: "w-[940px] flex flex-col md:flex-row md:items-center md:justify-center",
                        children: [
                            {
                                type: "InfoGrid",
                                props: {
                                    cardClassName: "bg-white p-4",
                                    columns: 3,
                                    containerClassName: "",
                                    gridClassName: "gap-10",
                                    eyebrowText: "THE BENEFITS",
                                    title: "Why Join Our Custodial Team",
                                    items: [
                                        {
                                            cardTitle: "Comprehensive Training",
                                            cardSubtitle: "Our in-depth training program ensures you're well-equipped to step into any classroom.",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/95689af3-noun-training-4257179-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Enjoy consistent backing from our team, ensuring you're never alone on your teaching journey.",
                                            cardTitle: "Ongoing Support",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/k2f20i-icon-5_1000000000000000000028.png",
                                        },
                                        {
                                            cardSubtitle: "You're eligible for excellent health benefits to keep you thriving inside and outside the classroom.",
                                            cardTitle: "Health Benefits",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/04d73c96-noun-health-1567122-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "With our exciting bonus opportunities, you're regularly rewarded for your dedication.",
                                            cardTitle: "Bonus Opportunities",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/7450174b-noun-bonus-1992113-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "Choose assignments that fit your schedule and enjoy the work-life balance you've been searching for.",
                                            cardTitle: "Flexible Scheduling",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a2c9764c-noun-schedule-5806583-9498fe.svg",
                                        },
                                        {
                                            cardSubtitle: "We provide a competitive salary on a weekly basis.",
                                            cardTitle: "Weekly Pay",
                                            svgUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b7a9b638-noun-paycheck-5260806-9498fe.svg",
                                        },
                                    ],
                                    layout: "horizontal",
                                    separatorImageUrl: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/orxjhm-section-line_1000000000000000000028.png",
                                    subtitleClassName: "text-gray-500 pt-5 font-normal text-[13px] md:max-w-[14rem] leading-[25px] text-left",
                                    svgClassName: "w-10 h-10",
                                    titleClassName: "text-gray-700 font-bold",
                                    separatorHeight: "10",
                                    separatorWidth: "30",
                                    eyebrowClasses: "flex items-center justify-center font-bold pb-5 text-blue-600 font-bold text-xs",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "bg-custom-gray",
            children: [
                {
                    type: "Testimonial",
                    props: {
                        id: 2,
                        eyebrowText: "REQUIREMENTS",
                        title: "Who We're Looking For",
                        textUnderSeparator: "We're seeking dedicated individuals who are:",
                        text:[
                            "Passionate about maintaining clean and safe environments",
                            "Excellent communicators",
                            "Knowledgeable about cleaning and maintenance procedures",
                            "Organized and detail-oriented",
                            "Committed to supporting the educational mission"
                          ],
                        imageSrc: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/2e76c9d5-adobestock-212883769-1-1_10fm0ah0cj09q00i000028.png",
                        textContentType: "unordered-list",
                        containerClassName: "md:pt-[60px] pb-[70px] md:gap-10",
                        eyebrowClasses: "text-blue-600 font-bold text-xs",
                        imageClassName: "",
                        imageHeight: "441",
                        imageWidth: "350",
                        separatorClassName: "",
                        separatorImageProps: {
                            separatorHeight: "40",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                        textClassName: "text-gray-400 md:w-96 font-normal text-base leading-[29px] pl-10 md:pl-0 text-left pt-10",
                        textPosition: "right",
                        textUnderSeparatorClasses: "",
                        titleClassName: "font-sans font-bold text-[26px] leading-[42px] md:text-left",
                    },
                },
            ],
        },
    },
    {
        type: "div",
        props: {
            className: "pb-10",
            children: [
                {
                    type: "TestimonialFromClients",
                    props: {
                        cardContainerClassName: "text-center",
                        title: "Hear From Our Custodial Team Members",
                        cards: [
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/85682539-michael-s-1_102802p028028000008028.png",
                                clientName: "Mark S.",
                                clientTitle: "Fort Worth, TX",
                                subtitle: "Working as a Substitute Custodian has been incredibly rewarding. I love knowing that I'm making a difference in students' lives every day.",
                                title: "An Amazing Opportunity",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/a4504acf-sarah-t-1_102802q028028000009028.png",
                                clientName: "Vera D.",
                                clientTitle: "Camden, NJ",
                                subtitle: "I've had an amazing experience. The kids were absolutely awesome. I've had some authentic experiences already!",
                                title: "Authentic Experiences",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px]",
                                cardContainerClassName: "p-1",
                            },
                            {
                                bgColor: "rgba(189,215,246,1)",
                                clientImage: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/8ac6496b-carlos-g-1_102d028028028002000028.png",
                                clientName: "Bryce V.",
                                clientTitle: "Birmingham, AL",
                                subtitle: "Can I recommend this to friends?! I have a few that are interested. I've been loving the job and am telling everyone!",
                                title: "100% Recommend",
                                titleClassName: "text-[16px] text-center",
                                subtitleClassName: "text-[13px] ",
                                cardContainerClassName: "p-1",
                            },
                        ],
                        containerClassName: "p-6",
                        eyebrowClasses: "text-blue-600 font-bold text-xs mb-4",
                        eyebrowText: "Testimonials",
                        gridColumns: 3,
                        separatorClassName: "mb-[2rem] -mt-[1.8rem]",
                        separatorImageProps: {
                            separatorHeight: "30",
                            separatorWidth: "30",
                            srcLink: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/1yooot5-line_1000000000000000000028.png",
                        },
                   
                        titleClasses: "text-2xl font-bold ",
                    },
                },
            ],
        },
    },
    {
        type: "Leadspace",
        props: {
            eyeLid: true,
            images: {
                desktop: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                mobile: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
                tablet: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/09a85da3-adobestock-117888873-1-1_10000001kw0lo000085028.png",
            },
            position: "centered middle",
            tailWindClasses: "h-96",
            children: [
                {
                    type: "div",
                    props: {
                        className: "max-w-3xl grid gap-6",
                        children: [
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-sans font-extrabold text-[26px] leading-[42px] text-center",
                                    children: "Apply Now to Become a Substitute Custodian.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    className: "text-white font-bold text-base leading-[29px] text-center",
                                    children: "Join our team dedicated to maintaining clean and safe learning environments. Start making a difference, enjoy flexible work, and earn money today.",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    children: [
                                        {
                                            type: "a",
                                            props: {
                                                href: "#tag1",
                                                className: "p-3 px-10 bg-[rgba(18,104,207,1)] text-white text-center text-[16px] leading-[19px] font-semibold rounded-[2px] border-none shadow-none hover:bg-[rgba(14,88,197,1)] hover:shadow-none hover:text-white",
                                                children: "START YOUR APPLICATION",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        type: "SectionWithChildren",
        props: {
            childrenClassName: "text-red-800 font-bold",
            className: "w-full h-[152px] text-xs text-center bg-[rgba(27,27,27,1)]",
            position: "center",
            verticalPosition: "middle",
            children: [
                {
                    type: "Image",
                    props: {
                        className: "p-1",
                        src: "https://d9hhrg4mnvzow.cloudfront.net/teach.copilotcareers.org/b86553c2-copilot-white-png_10jo03s000000000000028.png",
                        alt: "Alternative text for the image",
                        width: 350,
                        height: 350,
                    },
                },
                {
                    type: "div",
                    props: {
                        className: "pt-5 text-gray-300 text-[10px]",
                        children: "2024 © Copilot Careers. All rights reserved.",
                    },
                },
            ],
        },
    },
];

export {substituteTeacher, paraProfessional, childNutrition, substituteCustodian};