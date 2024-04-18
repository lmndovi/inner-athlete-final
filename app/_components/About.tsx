import React from "react";

// import { fetcher } from "@/utils/fetchAbout";
// import useSWR from "swr";
// import { About } from "@/typings";

// type Props = {
//   about: About;
// };

const AboutContent = () => {
  // const { data: about, error } = useSWR(
  //   `*[_type == "about"]{
  //   _id, about,
  // }`,
  //   fetcher
  // );

  return (
    <div>
      <h2 className="text-3xl">About</h2>
      {/* {about?.about.split("/n/n").map((paragraph, i) => (
        <div key={i}>
          <p>{paragraph}</p>
          <hr className="my-2 opacity-0" />
        </div>
      ))} */}
      //{" "}
      <p>
        // Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Perspiciatis // impedit tempora provident vitae, temporibus, fugit
        dolores maiores // molestias quo mollitia fuga alias culpa obcaecati.
        Maxime laboriosam // praesentium optio tempora eligendi. Impedit ipsam
        numquam a, aut quos // dolores enim consequuntur odit ipsum nesciunt
        saepe earum magnam. // Voluptate delectus eos aliquam minima? Harum in
        consequatur, asperiores // sequi eos qui a nisi explicabo. Nam impedit
        commodi at et cupiditate cum // dolorem maxime eaque sit, excepturi
        doloribus earum, expedita ab debitis // dicta quo odio? Corporis qui
        magni libero quas alias quae nam blanditiis // quibusdam! Exercitationem
        veritatis, ut provident autem nostrum tempore // reiciendis sint veniam
        omnis eligendi aut voluptatum quibusdam nam qui // velit at enim nulla
        dolorem sapiente maiores vero dolores aperiam! // Error, incidunt
        aspernatur. Aliquam, ullam repellendus molestias quae // itaque aut
        totam quod necessitatibus, exercitationem corporis // dignissimos
        tenetur tempora libero. Accusamus, excepturi, in, // perspiciatis hic
        autem ea tenetur consequuntur nostrum dolorem nam dicta // dolorum. //{" "}
      </p>
    </div>
  );
};

export default AboutContent;
