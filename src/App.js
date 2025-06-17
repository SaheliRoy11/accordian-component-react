import { useState } from "react";

//data for accordian
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          curOpen={curOpen} //curOpen is the currently opened item's num value
          onOpen={setCurOpen}
          num={index + 1}
          title={faq.title}
          key={index}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen; //is the current item open

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(isOpen ? null : num)}//if isOpen is true, then after clicking on it, it should be closed and no item is supposed to be open, so send back null.But, if isOpen is false, it means the item clicked should be opened so send the num value of this item to set to curOpen.
    >
      <p className="number">{num < 10 ? "0" + num : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}
