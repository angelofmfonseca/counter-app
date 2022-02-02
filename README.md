# Cornershop Frontend Test v1.5.0

## Development Process:

### Design Pattern:

The test was very interesting and challenging in the sense of being able to deal with the one week deadline and my current job tasks, but I managed to finish the challenge.

After receiving the challenge, the first thing I did was analyze the requirements to develop the project and then install and configure everything. After that, I stopped to analyze the flow and, as React consists in a library focused on componentization, the more and better componentized the application is, the better it will be for React to handle and the result will be a performance increase.

With that in mind, I chose to use **Atomic Design** as the Design Pattern for the project. **As a result, the structure was well componentized and responsibilities well divided, which made the code very reusable throughout the development process**.

### Structure:

After deciding on using Atomic Design, another important decision was the structure of the code throughout the project, so for all UI components, I started with a structure in which **each component has its own folder containing its respective index, styles, tests and stories**, therefore it would be easier to locate myself throughout the project. For example, if I needed to change the Button, I just had to access its folder and, inside it, would be all the code relevant to the Button.

### Storybook:

I mentioned stories, because that was an extra feature that I tried to use in the project was Storybook, which I personally like, because **it helps a lot in the development of UI components and in tests, Storybook make crystal clear what the exact responsibility of each component and works perfectly fine with Atomic Design and also works as a documentation**.

### Jest and Enzyme:

As for **testing**, I chose to use Jest and Enzyme, as I use them daily in my current job, so I'm more familiar with them.

### Styled-Components:

For **styling**, my choice was Styled-Components, because I think it completes the architecture that I chose for the project, in addition to **allowing me to work with logic in the styles and because it makes it easier for someone else to read the code later**. For example, when creating a style component and choosing a very assertive nomenclature, anyone who stops to analyze the code will understand what that respective component tag is for. In other words, it's easier to understand the purpose of a tag when it's called "ButtonWrapper" than if it's just a div or a section.

### Context API:

With the use of Atomic Design and the responsibilities well separated, the flow and sharing of information becomes simple. So, for **state management**, my choice was Context, which a simple syntax and workflow.

As I`ve mentioned, because of the Atomic Design Pattern, I could avoid prop drilling and all the props and information that was shared between a group of components was passed just for one or two levels bellow, therefore I was able to avoid having to put "everything" in the state (which would be a bad practice) and the use of Context was only necessary in some cases when the information was more global and used in diferent places of the application.

> Conclusion:
> I've tried to deliver every single requirements of the assessment by using good pratice during the entire development process to show you a bit of what I know, of what I can do and of how my developing process is, and only a few things ended up not being developed in this project due to the little time left, since I had to reconcile the challenge with my current work, but I'm very satisfied with the result and I intend to continue evolving the project and evolving what it already has, as well as implementing new features.

Hope to hear some great news from you soon.
