import React from 'react';

const Accordion = () => {
  return (
    <div className="page__wrapper">
      <h1 className="heading">Power of HTML</h1>
      <div className="accordion">
        <AccordionItem
          summary="What are some random questions to ask?"
          content="That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends, family and people you want to get to know better."
        />
        <AccordionItem
          summary="Do you include common questions?"
          content="This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator are questions that elicit a bit more information that a typical common question."
        />
        <AccordionItem
          summary="Can I use this for 21 questions?"
          content="Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated and you'll instantly have a random list of 21 questions to use. If you want to curate the 21 questions to use, you can spend some time on the generator until you find 21 questions you like, then use those the next time you play the 21 questions game."
        />
        <AccordionItem
          summary="Are these questions for girls or for boys?"
          content="The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with). These questions were created to elicit interesting and thoughtful answers and aren't specific to a specific type of person."
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ summary, content }) => {
  return (
    <details>
      <summary>{summary}</summary>
      <p>{content}</p>
    </details>
  );
};

export default Accordion;
