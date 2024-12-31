import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";
import { useParams } from "react-router-dom";

const Causes = () => {
  const { id } = useParams();
  const causeDetails = {
    1: {
      title: "Many different ways today to find",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-01_medium.jpg",
      description:
        "Detailed description for cause 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 1!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 1!"),
        },
      ],
    },
    2: {
      title: "Fundraiser for Bella and her friends",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-04_medium.jpg",
      description:
        "Detailed description for cause 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 2!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 2!"),
        },
      ],
    },
    3: {
      title: "New clothes for highland children",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-07_medium.jpg",
      description:
        "Detailed description for cause 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 3!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 3!"),
        },
      ],
    },
    4: {
      title: "Keep Teachers in the Classroom",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-02_medium.jpg",
      description:
        "Detailed description for cause 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 4!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 4!"),
        },
      ],
    },
    5: {
      title: "Supporting Lifeline charity group",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-05_medium.jpg",
      description:
        "Detailed description for cause 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 5!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 5!"),
        },
      ],
    },
    6: {
      title: "Big charity: build school for poor",
      image:
        "https://demo.joomshaper.com/2017/hope/images/2017/09/19/blog-08_medium.jpg",
      description:
        "Detailed description for cause 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore.",
      additionalInfo: {
        author: "By Kawshar Ahmed",
        date: "15 September 2017",
        hits: "3085",
      },
      buttons: [
        {
          label: "Prev",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Prev clicked for cause 6!"),
        },
        {
          label: "Next",
          style: "bg-primary text-white hover:bg-black",
          onClick: () => alert("Next clicked for cause 6!"),
        },
      ],
    },
  };
  const cause = causeDetails[id];

  if (!cause) {
    return <div>Cause not found</div>;
  }

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner
        title="Causes"
        backgroundImage="https://demo.joomshaper.com/2017/hope/images/demo/page-title-bg.jpg"
      />
      <div className="py-[95px] mx-10 flex flex-col items-center">
        <CausesCard
          causesImage={cause.image}
          Title={cause.title}
          Description={cause.description}
          detailView={true}
          extraFields={{
            additionalInfo: cause.additionalInfo,
            buttons: cause.buttons,
          }}
        />
      </div>
    </div>
  );
};

export default Causes;