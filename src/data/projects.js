const projects = [
	{
		"title": "Circuit Breaker Testing ATE",
		"subTitle": "LnT Technology Services, Aerospace Vertical",
		"tags": ["ATE", "Electronics", "LabView", "PCB Designing", "Documentation"],
		"summary": "Made as part of LnT Technology Services, Aerospace Vertical. Part of designing and manufacturing team for complete Automatic test assembly equipment.",
		"projectDesc": {
			"P1": "Designed and Build a full fledged ATE for testing of Circuit Breakers. The project involved various stations to perform Electrical and Mechanical test on the CB's. PLC along with actuators took care of movement of CB from one station to another. Parallel stations and testing was used to achieve the required throughput. PXI chassis was used along with measuring and powering instruments to perform the test, record the result and generate the result.",
			"P2": "My Responsibilities included: ",
			"B": ["Designing of LabVIEW Software", "System Designing", "Circuit Designing", "Harness Designing"]
		},
		"images": [],
		"links": {}
	},
	{
		"title": "Frisbee Throwing Robot",
		"subTitle": "The landing Disc, Robocon 17",
		"tags": ["Robotics", "Electronics", "Arduino", "Processing", "Mechanics"],
		"summary": "Made as a part of Robocon 2017 theme. A bot capable of throwing Frisbee autonomously to make them land on poles of different height and at different position and navigation.",
		"projectDesc": {
			"P1": "As a team lead, I took care of everything right including making project proposal and presenting to administration, budgeting, making design comparisons, procurement to designing and manufacturing of bot. The project involved studying of aerodynamics of a flying frisbee to take into effect the effect of rotation, angle of flight and release velocity to make the disc land on the platform of various height.",
			"P2": "The features of bot were as following:",
			"B": ["Autonomous Bot Navigation", "Disc Rotation closed loop speed control", "Platform height and angle adjustment"]
		},
		"images": [],
		"links": {}
	},
	{
	  "title": "Smarthomes",
	  "subTitle": "As a part of 1Thing internship, then B.E. project and then personal project.",
	  "tags": ["Embedded Systems", "Arduino", "Node.js", "Raspberry Pi", "Frontend Web Development", "Database", "ESP8266"],
	  "summary": "Automating home and giving control to user via phone and voice making user's life more convinient.",
	  "projectDesc": {
			"P1": "A device making existing homes smarter. Wireless modules across the house communicating with the central server. A web app to control all devices. Few features implemented involve scheduler, app control, voice control, integration with physical switches, central intelligent server, control and sensor modules etc.",
			"P2": "The backend app was made on Python and then ported to NodeJS. All the rules were written in customizable JSON based rules. The front end was written with JQuery and was customizable just based on JSON without needing to rewrite the code. All the inputs were stored in SQL database for further analyzing. The physical module was based on ESP8266 and communicated based on MQTT protocol. The actions were taken by Arduino. The central server was hosted on Raspberry Pi.",
			"B": []
		},
	  "images": [],
		"links": {}
	},
	{
	  "title": "CNC Vertical Mill and 3D printer",
	  "subTitle": "As a part of True-education internship",
	  "tags": ["Arduino", "Mechanics", "PC Toolchain"],
	  "summary": "CNC machine capable of millings, drilling and engraving by giving a gcode file.",
	  "projectDesc": {
			"P1": "Two CNC vertical mill of different dimension was made. The machine is capable of millings, drilling and engraving by giving a gcode file. They were built from scratch for in house projects.",
			"P2": "3D printer was assembled with modifications to improve quality of printing.",
			"B": []
		},
	  "images": [],
		"links": {}
	},
	{
	  "title": "Quadcopter",
	  "subTitle": "As a part of True-education internship",
	  "tags": ["Arduino", "UAV", "Sensors"],
	  "summary": "A Quadcopter from scratch implementing every feature from basic to learn the concepts behind it.",
	  "projectDesc": {
			"P1": "A Quadcopter implemented from scratch as a learning project. ",
			"P2": "The concepts learnt and implemented involved",
			"B": ["BLDC Motor Driving", "IMU based orientation calculation", "PID", "RF and WiFi Based Remote Control", "Multirotor's flight Dynamics"]
		},
	  "images": [],
		"links": {}
	},
	{
	  "title": "Attendance Machine",
	  "subTitle": "As a part of True-education internship",
	  "tags": ["Arduino", "IoT", "Sensors"],
	  "summary": "IoT connected RFID based attendance machine capable of logging information in real time to the server which then dislayed real time stats.",
	  "projectDesc": {
			"P1": "Several protypes of IoT conneced RFID based attendance machine were made. Communication protocols exoerimented included WiFI, Ethernet and Bluetooth. RFID reader was interfaced which sent data to web server. Web server then did processing, stored data in SQL database and updated Web App frontend.",
			"P2": "The hardware consisted of Arduino board with LCD, RFID reader, Communication Module and buzzer. The backend was integrated with already hosted PHP site to connect with existing infrastructure.",
			"B": []
		},
	  "images": [],
		"links": {}
	},
	{
	  "title": "RPi Server",
	  "subTitle": "As a part of True-education internship",
	  "tags": ["Raspberry Pi", "Linux"],
	  "summary": "A 24*7 running machine capable of daily computational needs",
	  "projectDesc": {
			"P1": "Set up a complete server on Raspberry Pi for day to day operations.The server would be accesible from all intranet devices with appropriate permissions. Learnt configuration of Linux.",
			"P2": "The following services and servers were configured",
			"B": ["File Sharing Server", "Print Server", "Media Server", "Web Server", "NodeJS server"]
		},
	  "images": [],
		"links": {}
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
		}
	},
	{
	  "title": "Investment Visualizer and Summarizer",
	  "subTitle": "Personal Project",
	  "tags": ["Python", "Plot.ly", "Pandas", "Numpy", "Jupyter Notebook"],
	  "summary": "Mutual Fund investment visualization to see point of investment, current NAV and create a summary table to find current investment details.",
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
		}
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
		"links": {}
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
		"links": {}
	}
]

module.exports = projects;
