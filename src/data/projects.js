const projects = [
	{
		"title": "Power Converters Manufacturing and Debugging",
		"subTitle": "Anora LLC, System's Testing",
		"tags": ["Power Electronics", "Hardware Debugging", "Manufacturing", "Project Management"],
		"summary": "Manufacturing, Test and Debug of various power converters based on SiCFETs",
		"projectDesc": {
			"P1": "Design and perform tests and debug procedure for manufacturing units of various power converters based on SiCFETs. High power and high density boards were manufactured and tested.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Power Electronics", "Hardware Debugging", "Manufacturing", "Project Management"]
	},
	{
		"title": "Firmware and UI Development for Modular Power Converters",
		"subTitle": "Anora LLC, System's Testing",
		"tags": ["Firmware Development", "Software Maintainance", "Embedded Systems"],
		"summary": "Developed firmware for evaluating various features of a modular evaluation platorm.",
		"projectDesc": {
			"P1": "The program is used to prototype and evaluate performance of various power converter applications. Running on a custom hardware, the program is used to control and monitor various parameters of the power converter.",
			"P2": "The firmware is developed in C on C2000 family of uC by TI. The UI is developed in C# using WPF. The major features of the program include:",
			"B": ["Free Running PWM", "One Shot PWM", "ADC", "MODBUS", "UART"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Firmware Development", "Software Maintainance", "Embedded Systems", "C2000", "C#"]
	},
	{
		"title": "LabVIEW Wrapper for Device Driver", 
		"subTitle": "Anora LLC, System's Testing",
		"tags": ["LabVIEW", "CPP"],
		"summary": "Developed LabVIEW wrapper for a PXI card device driver",
		"projectDesc": {
			"P1": "Wrote LabVIEW wrapper for a PXI card device driver. The driver was written in C++ and the wrapper was written in LabVIEW. The wrapper was used to control the PXI card from LabVIEW.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Firmware Development", "Software Maintainance", "Embedded Systems", "C2000", "C#"]
	},
	{
		"title": "Wafer Probing Station Automation",
		"subTitle": "Anora LLC, System's Testing",
		"tags": ["Industrial Automation", "Electronics", "Embedded Systems", "PCB Designing", "Instrumentation", "Project Management", "Driver Developlment"],
		"summary": "Automating wafer probing station so that it can be controlled by PC",
		"projectDesc": {
			"P1": "Designing and manufacturing of a custom instrument to control legacy wafer probing station using PC. The solution consist of uC based design to sense and control the wafer probing station.",
			"P2": "Various part of solution include:",
			"B": ["PCB Designing", "Circuit Designing", "Firmware Development", "Driver Development", "Enclosure Design", "Reverse Engineer", "Project Management", "Manufacturing"]
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Hardware Designing", "Embedded Systems", "PCB Designing", "Instrumentation", "Project Management", "Driver Development"]
	},
	{
		"title": "Playing with Flipper Zero",
		"subTitle": "Exploratory Project",
		"tags": ["Flipper Zero", "Hardware Hacking"],
		"summary": "Playing around with various flipper zero firmware and applications",
		"projectDesc": {
			"P1": "The Flipper Zero is a small, open-source, hardware hacking platform. It is a tiny computer that can be used for penetration testing, reverse engineering, and general hacking.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Hardware Hacking"]
	},	
	{
		"title": "Playing with AI APIs",
		"subTitle": "Exploratory Project",
		"tags": ["OpenAI", "Python"],
		"summary": "Playing around with various LLM and AI APIs",
		"projectDesc": {
			"P1": "Exploring capabilities of various AI APIs and LLM APIs. Working with OpenAI, HuggingFace, langchain framework, etc.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Python", "AI"]
	},	

	{
		"title": "Semiconductor Validation, Battery Management System",
		"subTitle": "Anora Instrumentation, Post Silicon",
		"tags": ["Bench Validation", "Python Development", "Instrumentation"],
		"summary": "Developing tests and test strategy for testing new generation of Battery Management IC's",
		"projectDesc": {
			"P1": "Engineering validation of new IC waffers. Conducting various parametric, functional, timing, system's test.",
			"P2": "My Responsibilities included: ",
			"B": ["Framework Development", "Python Development", "Leading Project", "Schematic Designing"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Python", "Semiconductor Validation", "Test Bench", "Hardware Designing"]
	},
	{
		"title": "System Tester for Solar Inverters",
		"subTitle": "Anora Instrumentation, Beyond Silicon",
		"tags": ["ATE", "Electronics", "Embedded Systems", "PCB Designing", "Instrumentation", "Project Management"],
		"summary": "Designing and manufacturing for complete automated test assembly equipment.",
		"projectDesc": {
			"P1": " Designed and manufactured system testers for Solar Invertors for batch manufacturing. Designed custom equipment, selected COTS, designed test strategy and software for the same.",
			"P2": "My Responsibilities included: ",
			"B": ["System Designing", "Circuit Designing", "Harness Designing", "Firmware Development", "Test Automation Development"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["ATE", "Electronics Design", "Python", "Embedded Systems"]
	},
	{
		"title": "System Tester for Smart Relay",
		"subTitle": "Anora Instrumentation, Beyond Silicon",
		"tags": ["ATE", "Electronics", "Embedded Systems", "PCB Designing", "Instrumentation", "Project Management"],
		"summary": "Designing and manufacturing for manual tester for Smart Relay Module.",
		"projectDesc": {
			"P1": " Designed and manufactured system testers for Smart Relay Module for batch manufacturing. Designed custom equipment, selected COTS, designed test strategy and software for the same.",
			"P2": "My Responsibilities included: ",
			"B": ["System Designing", "Circuit Designing", "Harness Designing", "Firmware Development", "Test Automation Development"]
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["ATE", "Electronics Design", "Python", "Embedded Systems"]
	},
	{
		"title": "EVM Manufacturing",
		"subTitle": "Anora Instrumentation, Beyond Silicon",
		"tags": ["Electronics", "PCB Designing", "Manufacturing Management"],
		"summary": "Designing and manufacturing for complete automated test assembly equipment.",
		"projectDesc": {
			"P1": "Manufactured multiple EVM and circuit boards. Vendor interaction, schedule management, client management.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Electronics Design"]
	},
	{
		"title": "Circuit Breaker Testing ATE",
		"subTitle": "LnT Technology Services, Aerospace Vertical",
		"tags": ["ATE", "Electronics", "LabView", "PCB Designing", "Documentation"],
		"summary": "Designing and manufacturing for complete automated test assembly equipment.",
		"projectDesc": {
			"P1": "Designed and Build a full fledged ATE for testing of Circuit Breakers. The project involved various stations to perform Electrical and Mechanical test on the CB's. PLC along with actuators took care of movement of CB from one station to another. Parallel stations and testing was used to achieve the required throughput. PXI chassis was used along with measuring and powering instruments to perform the test, record the result and generate the result.",
			"P2": "My Responsibilities included: ",
			"B": ["Designing of LabVIEW Software", "System Designing", "Circuit Designing", "Harness Designing"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["ATE", "Electronics Design", "LabVIEW"]
	},
	{
		"title": "Frisbee Throwing Robot",
		"subTitle": "The landing Disc, Robocon 17",
		"tags": ["Robotics", "Electronics", "Arduino", "Processing", "Mechanics"],
		"summary": "A bot capable of throwing Frisbee autonomously to make them land on poles and navigation.",
		"projectDesc": {
			"P1": "As a team lead, I took care of everything right including making project proposal and presenting to administration, budgeting, making design comparisons, procurement to designing and manufacturing of bot. The project involved studying of aerodynamics of a flying frisbee to take into effect the effect of rotation, angle of flight and release velocity to make the disc land on the platform of various height.",
			"P2": "The features of bot were as following:",
			"B": ["Autonomous Bot Navigation", "Disc Rotation closed loop speed control", "Platform height and angle adjustment"]
		},
		"images": [],
		"links": {
			"DC Motor PID Repository": "https://github.com/rishabhrkaushik/dcMotorPIDControl"
		},
		"topProject": true,
		"domains": ["Electronics Design", "Python", "Embedded Systems", "Robotics"]
	},
	{
		"title": "LED Driver Testing",
		"subTitle": "LnT Technology Services, Industrial and Consumer Products",
		"tags": ["LED Drivers", "Electronics", "Testing"],
		"summary": "Testing various performance factors of several LED drivers.",
		"projectDesc": {
			"P1": "Testing parameters like Performance Curve, Efficiency, Dim waveforms, Line and Load Regulation, Startup Time etc. for various LED drivers.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Electronics Design"]
	},
	{
		"title": "Smarthomes",
		"subTitle": "1Thing internship, Personal project.",
		"tags": ["Embedded Systems", "Arduino", "Node.js", "Raspberry Pi", "Frontend Web Development", "Database", "ESP8266"],
		"summary": "Automating home and giving control to user via phone and voice making user's life more convinient.",
		"projectDesc": {
			"P1": "A device making existing homes smarter. Wireless modules across the house communicating with the central server. A web app to control all devices. Few features implemented involve scheduler, app control, voice control, integration with physical switches, central intelligent server, control and sensor modules etc.",
			"P2": "The backend app was made on Python and then ported to NodeJS. All the rules were written in customizable JSON based rules. The front end was written with JQuery and was customizable just based on JSON without needing to rewrite the code. All the inputs were stored in SQL database for further analyzing. The physical module was based on ESP8266 and communicated based on MQTT protocol. The actions were taken by Arduino. The central server was hosted on Raspberry Pi.",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Embedded Systems", "Electronics Design", "Fullstack Development", "Python"]
	},
	{
		"title": "CNC Vertical Mill and 3D printer",
		"subTitle": "True-education internship",
		"tags": ["Arduino", "Mechanics", "PC Toolchain"],
		"summary": "CNC machine capable of millings, drilling and engraving by giving a gcode file.",
		"projectDesc": {
			"P1": "Two CNC vertical mill of different dimension was made. The machine is capable of millings, drilling and engraving by giving a gcode file. They were built from scratch for in house projects.",
			"P2": "3D printer was assembled with modifications to improve quality of printing.",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Electronics Design", "Embedded Systems", "Robotics"]
	},
	{
		"title": "Quadcopter",
		"subTitle": "True-education internship",
		"tags": ["Arduino", "UAV", "Sensors"],
		"summary": "A Quadcopter from scratch implementing every feature from basic to learn the concepts behind it.",
		"projectDesc": {
			"P1": "A Quadcopter implemented from scratch as a learning project. ",
			"P2": "The concepts learnt and implemented involved",
			"B": ["BLDC Motor Driving", "IMU based orientation calculation", "PID", "RF and WiFi Based Remote Control", "Multirotor's flight Dynamics"]
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Robotics", "Embedded Systems", "Electronics Design"]
	},
	{
		"title": "Attendance Machine",
		"subTitle": "True-education internship",
		"tags": ["Arduino", "IoT", "Sensors"],
		"summary": "IoT connected RFID based attendance machine capable of logging information in real time to the server which then dislayed real time stats.",
		"projectDesc": {
			"P1": "Several protypes of IoT conneced RFID based attendance machine were made. Communication protocols exoerimented included WiFI, Ethernet and Bluetooth. RFID reader was interfaced which sent data to web server. Web server then did processing, stored data in SQL database and updated Web App frontend.",
			"P2": "The hardware consisted of Arduino board with LCD, RFID reader, Communication Module and buzzer. The backend was integrated with already hosted PHP site to connect with existing infrastructure.",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Embedded Systems", "Electronics Design"]
	},
	{
		"title": "RPi Server",
		"subTitle": "True-education internship",
		"tags": ["Raspberry Pi", "Linux", "Docker"],
		"summary": "A 24*7 running machine capable of daily computational needs",
		"projectDesc": {
			"P1": "Set up a complete server on Raspberry Pi for day to day operations.The server would be accesible from all intranet devices with appropriate permissions. Learnt configuration of Linux.",
			"P2": "The following services and servers were configured",
			"B": ["Paperless", "PiHole", "File Sharing Server", "Print Server", "Media Server", "Web Server", "NodeJS server", "Portainer"]
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Fullstack Development"]
	},
	{
		"title": "Python Automation",
		"subTitle": "Personal Project",
		"tags": ["Python", "Selenium"],
		"summary": "Lazy to do something, automate it. And there is nothing better than Python in world of automation",
		"projectDesc": {
			"P1": "",
			"P2": "The following were the tasks automated",
			"B": ["Quora Unfollower - Unfollow all topics on quora to get a fresh start", "Secret Santa Randomizer - Randomly pairs people for secret santa and send them automated mail."]
		},
		"images": [],
		"links": {
			"Quora Unfollower": "https://github.com/rishabhrkaushik/quoraUnfollower",
			"Secret Santa Randomizer": "https://github.com/rishabhrkaushik/SecretSantaRandomizer"
		},
		"topProject": false,
		"domains": ["Python"]
	},
	{
		"title": "Audio Note Recognition",
		"subTitle": "e-Yantra 2017, IIT-B Challenge",
		"tags": ["Python", "scikit-learn", "Machine Learning", "Software Development"],
		"summary": "Wave analytics to extract notes from song or music",
		"projectDesc": {
			"P1": "Wave analytics to extract notes from song or music",
			"P2": "Made using Python, scipy, wave modules",
			"B": []
		},
		"images": [],
		"links": {
			"Repository": "https://github.com/rishabhrkaushik/notesFindingMusic"
		},
		"topProject": false,
		"domains": ["Python"]
	},
	{
		"title": "Mutual Fund Analyser",
		"subTitle": "Personal Project",
		"tags": ["Python", "Plot.ly", "Pandas", "Numpy", "Jupyter Notebook"],
		"summary": "Mutual Fund investment visualization to see investment graph an summary table of current investment details.",
		"projectDesc": {
			"P1": "Mutual fund analysis to view few graphs and create a summary table. Most of the data is read out of a JSON template filled with data by user.",
			"P2": "The graphs show ",
			"B": ["Amount Invested vs Current Value", "NAV with purchase and selling points and units"]
		},
		"images": [
			{
				"original": require("./../data/Projects/Current Value vs Invested Amount.png"),
				"thumbnail": require("./../data/Projects/Current Value vs Invested Amount.png")
			},
			{
				"original": require("./../data/Projects/Point of Investment Graph.png"),
				"thumbnail": require("./../data/Projects/Point of Investment Graph.png")
			},
			{
				"original": require("./../data/Projects/Summary Table.png"),
				"thumbnail": require("./../data/Projects/Summary Table.png")
			}
		],
		"links": {
			"Code": "https://github.com/rishabhrkaushik/MF-Investment-Analyser",
			"Demonstrate": "https://drive.google.com/file/d/1Eo82HDiAqpC19mlH2wZ9VF5dO_Addf3x/view?usp=sharing"
		},
		"topProject": true,
		"domains": ["Python", "Fullstack Development"]
	},
	{
		"title": "Personal Portfolio Website",
		"subTitle": "Personal Project",
		"tags": ["ReactJS", "HTML", "CSS", "JSON"],
		"summary": "The very webiste you are viewing. This is the 3rd version of website built to showcase portfolio and learn ReactJS.",
		"projectDesc": {
			"P1": "Personal portfolio acting to increase online visibility and acting as resume. The website is built on ReactJS and hosted as github pages.",
			"P2": "The website is highly modular with JSON based configuration to populate most of the fields. Material UI is used for components giving it slick look.",
			"B": []
		},
		"images": [],
		"links": {
			"Code Repository": "https://github.com/rishabhrkaushik/rishabhrkaushik.github.io_code"
		},
		"topProject": false,
		"domains": ["Fullstack Development"]
	},
	{
		"title": "Puzzle Solving Robot",
		"subTitle": "e-Yantra 2016, IIT-B Challenge",
		"tags": ["Robotics", "Image Processing", "AVR", "Python", "OpenCV"],
		"summary": "Made for e-Yantra 2016, a Autonomous robot was programmed to navigate and act based on image input",
		"projectDesc": {
			"P1": "A Firebird V robot was programmed to navigate the field. Python script was written to detect digits in an image input using openCV. Operations were performed on the numbers to get the shortest route.",
			"P2": "An Arm was constructed over the bot to pick and place the blocks in the field.",
			"B": []
		},
		"images": [
			{
				"original": require("./../data/Projects/Bot in Fields.png"),
				"thumbnail": require("./../data/Projects/Bot in Fields.png")
			},
			{
				"original": require("./../data/Projects/Digit Recognition.png"),
				"thumbnail": require("./../data/Projects/Digit Recognition.png")
			},
			{
				"original": require("./../data/Projects/Firebird V.jpg"),
				"thumbnail": require("./../data/Projects/Firebird V.jpg")
			}
		],
		"links": {
			"Digit Recognition Repository": "https://github.com/rishabhrkaushik/digitRecognition"
		},
		"topProject": true,
		"domains": ["Embedded Systems", "Robotics", "Electronics Design", "Python"]
	},
	{
		"title": "Hex Parser Tool",
		"subTitle": "LnT Technology Services, Aerospace Vertical",
		"tags": ["Python", "PyQT5", "GUI", "Excel VBA"],
		"summary": "Designing of a scalable and modular Python based GUI for rule based Hex Parsing.",
		"projectDesc": {
			"P1": "Designed a NVM parsing tool to decode hex data based on rules stored in configuration file. GUI was created in PyQT5. The configurations files were generated and validated using user friendly Excel and could be changed with respect to rules without changing the tool. ",
			"P2": "The complete architecture and tool was designed individualy right from conception to deployment.",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Python"]
	},
	{
		"title": "Alexa Controlled Wall Clock Panel",
		"subTitle": "Personal Project",
		"tags": ["Alexa Skill Kit", "AWS Lambda", "NodeJS", "Arduino", "ESP8266", "WS2812"],
		"summary": "Color Changing, Alexa integrated clock, timer and wall light panel",
		"projectDesc": {
			"P1": "Designed a panel for my room to emulate clock functionality along with timer and mood light. ",
			"P2": "The panel is controlled over Alexa, webpage. Created and hosted Alexa Skill for same.",
			"B": []
		},
		"images": [
			{
				"original": require("./../data/Projects/clock.jpg"),
				"thumbnail": require("./../data/Projects/clock.jpg")
			},
			{
				"original": require("./../data/Projects/panel.jpg"),
				"thumbnail": require("./../data/Projects/panel.jpg")
			},
			{
				"original": require("./../data/Projects/alexa.jpg"),
				"thumbnail": require("./../data/Projects/alexa.jpg")
			},
			{
				"original": require("./../data/Projects/webpage.png"),
				"thumbnail": require("./../data/Projects/webpage.png")
			}
		],
		"links": {},
		"topProject": true,
		"domains": ["Fullstack Development", "Electronics Design", "Embedded Systems"]
	},
	{
		"title": "LED Driver ATE",
		"subTitle": "LnT Technology Services, Industrial Products Vertical",
		"tags": ["ATE", "Electronics", "LabView", "Documentation"],
		"summary": "Design and development of ATE for testing range of constant current LED Drivers",
		"projectDesc": {
			"P1": "The project integrated Power Meter, Osciloscope, Variable AC Source , Variable LED loads and switches with a PC application developed in LabVIEW. ATE was used to automate testing of LED driver for various performance parameters, setting multiple operating points and capturing readings from various equipments.",
			"P2": "My Responsibilities included: ",
			"B": ["System Architecture", "LabVIEW Development", "Electronic Mockup Boards"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["ATE", "Electronics Design", "LabVIEW"]
	},
	{
		"title": "Admin Dashboard for IoT Device",
		"subTitle": "Freelancing Project",
		"tags": ["NodeJS", "ReactJS", "MongoDB", "Fullstack Development"],
		"summary": "Development for front and backend of Admin Dashboard to monitor data from IoT devices. Also used to interact with database and perform backend tasks like registeration, deployment, activation of new device",
		"projectDesc": {
			"P1": "Web App for management of IoT device fleet. Based on MERN Stack.",
			"P2": "My Responsibilities included: ",
			"B": ["Fullstack Development", "Deployment and management on Linux Server"]
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Fullstack Development"]
	},
	{
		"title": "NFC Trigger",
		"subTitle": "Maker Project",
		"tags": ["ESP32", "Arduino", "MQTT"],
		"summary": "NFC Based trigger to automate most frequent hardware or software tasks.",
		"projectDesc": {
			"P1": "ESP32 interfaced with RC522 module. Programmed to map particular cards with tasks used regularly sent via MQTT.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Embedded Systems", "Electronics Design"]
	},
	{
		"title": "Cube Runner",
		"subTitle": "Personal Project",
		"tags": ["Unity", "Game Development"],
		"summary": "Control and Navigate cube via hurdles to make it reach the end",
		"projectDesc": {
			"P1": "Made as tutorial project to learn basics of Unity",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {
			"Repository": "https://github.com/rishabhrkaushik/Cube-Runner"
		},
		"topProject": false,
		"domains": ["Unity"]
	},
	{
		"title": "Principia",
		"subTitle": "Personal Project",
		"tags": ["Unity", "Virtual Reality", "Physics Simulations"],
		"summary": "Physics Simulations for upcoming Mixed Reality glasses.",
		"projectDesc": {
			"P1": "Physics based simulations and game to teach and visualize the concepts of various physics in VR space.",
			"P2": "Made in Unity along with VR SDK.",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": true,
		"domains": ["Unity"]
	},
	{
		"title": "Encoded Message Blinker",
		"subTitle": "Maker Project",
		"tags": ["Embedded Systems", "ATTiny 85", "Arduino"],
		"summary": "Send multicolor encoded message over LED blinking",
		"projectDesc": {
			"P1": "Interface between WS2812, ATtiny85 and switch and power components to send encoded string as led blinking.",
			"P2": "",
			"B": []
		},
		"images": [
			{
				"original": require("./../data/Projects/Encoded Message Blinker - Front.jpg"),
				"thumbnail": require("./../data/Projects/Encoded Message Blinker - Front.jpg")
			},
			{
				"original": require("./../data/Projects/Encoded Message Blinker - Back.jpg"),
				"thumbnail": require("./../data/Projects/Encoded Message Blinker - Back.jpg")
			},
			{
				"original": require("./../data/Projects/Encoded Message Blinker - Solder.jpg"),
				"thumbnail": require("./../data/Projects/Encoded Message Blinker - Solder.jpg")
			}
		],
		"links": {
			"Repository": "https://github.com/rishabhrkaushik/EncodedMessageBlinker"
		},
		"topProject": false,
		"domains": ["Embedded Systems", "Electronics Design"]
	},
	{
		"title": "Distributed Music Player",
		"subTitle": "Freelancing",
		"tags": ["Electronics System Designing"],
		"summary": "Play music in master slave architecture over 1000 metres open air range",
		"projectDesc": {
			"P1": "Integrated long range RF transiever, amplifier card, speaker, mp3 input to produce distributed music to be played in large area",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Electronics Design"]
	},
	{
		"title": "Satellite Tracking",
		"subTitle": "Freelancing",
		"tags": ["Python", "Data Visualisation", "Plotly"],
		"summary": "View and track orbits or satellite over globe given any time range.",
		"projectDesc": {
			"P1": "View and track orbits or satellite over globe given any time range.",
			"P2": "",
			"B": []
		},
		"images": [],
		"links": {},
		"topProject": false,
		"domains": ["Python"]
	},
]

module.exports = projects;
