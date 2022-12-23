import {Link} from "react-router-dom";
import EventList from '../components/EventList';

const timeMap = new Map([
	[1, "10:00 - 17:00"],
	[2, "10:00 - 17:00"],
	[3, "Closed"],
	[4, "10:00 - 15:00"],
	[5, "10:00 - 17:00"],
	[6, "10:00 - 17:00"],
	[0, "11:00 - 15:00"]
]);

// check if museum is currently open
let open = false;
const D = new Date();
let hour = D.getHours();
let day = D.getDay();
const inOpeningRange = (o,c) => {return hour >= o && hour <= c}
if (day === 1 && inOpeningRange(10,17)) {
	open = true;
} else if (day === 2 && inOpeningRange(10,17)) {
		open = true;
} else if (day === 3) {
		open = false;
} else if (day === 4 && inOpeningRange(10,17)) {
		open = true;
} else if (day === 5 && inOpeningRange(10,15)) {
		open = true;
} else if (day === 6 && inOpeningRange(10,17)) {
		open = true;
} else if (day === 0 && inOpeningRange(11,17)) {
		open = true;
}

const Welcome = () => {
	return (
		<div className="text-block">
			<h1>Museum of Human History</h1>
			<p>
				Visit our vast collection of relics from all over the globe. Carefully curated exhibitions on themes throughout history are open to the public.
			</p>
		</div>
		)
}

const OpeningTimes = () => {
	return (
		<div id="timetable">
		<h2>Opening Times</h2>
		<table>
			<tbody>
				<tr>
					<td>Mon</td>
					<td>{timeMap.get(1)}</td>
				</tr>
				<tr>
					<td>Tue</td>
					<td>{timeMap.get(2)}</td>
				</tr>
				<tr>
					<td>Wed</td>
					<td>{timeMap.get(3)}</td>
				</tr>
				<tr>
					<td>Thu</td>
					<td>{timeMap.get(4)}</td>
				</tr>
				<tr>
					<td>Fri</td>
					<td>{timeMap.get(5)}</td>
				</tr>
				<tr>
					<td>Sat</td>
					<td>{timeMap.get(6)}</td>
				</tr>
				<tr>
					<td>Sun</td>
					<td>{timeMap.get(0)}</td>
				</tr>
			</tbody>
		</table>
		</div>
	);
}

const OpenStatus = () => {
	return (
			<div id="status" className="text-block">
				{
					open ? 
					<>
						<h2 style={{color: "#09871a"}}>Currently Open</h2> 
						<p>Today: {timeMap.get(day)}</p>
						<p>Free tickets for general public.</p>
					</>
					:
					<>
						<h2 style={{color: "#ab1515"}} >Currently Closed</h2>
						<p>See our opening times below and check our events and exhibitions page.</p>
					</>
				}
				<Link className="link-button" to="book">Book Tickets</Link>
			</div>
	);
}

const WhatsOn = () => {
	return (
		<div id="events-section">
			<h1>Events and Exhibitions</h1>
			<EventList />
		</div>
	);
}

const Home = () => {
	return (
		<>
			<div id="general-info">
				<div id="hero-home"></div>
				<Welcome />
				<OpenStatus />
			</div>
			<WhatsOn />
		</>
	);
};

export default Home;