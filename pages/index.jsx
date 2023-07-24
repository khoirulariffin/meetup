import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Museum_Nasional_Indonesia.jpg",
    address: "Jakarta",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Istana-Merdeka.jpg",
    address: "Jakarta",
    description: "This is a second meetup!",
  },
];

export default function Home() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
