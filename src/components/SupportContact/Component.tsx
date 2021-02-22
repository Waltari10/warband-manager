import React from 'react';
import Dialog from '../Dialog';

interface Props {
  handleClose(): void;
  handleConfirm?(): void;
  open: boolean;
}

const SupportContact: React.FunctionComponent<Props> = (props) => {

  return (
    <Dialog
      title={'Support/Contact'}
      confirm="Close"
      dialog={`
      
      <h4>Support</h4>
      If you are experiencing problems, or have any questions, suggestions or 
      comments please contact me at 
      <a href="mailto:warband.manager@gmail.com">warband.manager@gmail.com</a>.<br><br>


      You can also say hi to me on Twitter. I'd love to hear your opinion on Warband Manager! 
      <a href="https://twitter.com/ValdeCode" target="_blank">@valdeCode<a/><br><br>

      <h4>Want to help?</h4>
      I'd be happy to share the source code, if somebody want's to help by making a pull request. There are a ton of 
      features that could be added and so little time. So any help would be appreciated.<br>
      Right now the tech stack includes: React, Redux, AWS and a few others.
      `}
      isConfirm={false}
      {...props}
    />
  );
};

export default SupportContact;


// <br><br>
//       <h4>Donations</h4>
//       This project is not going to make any money. I just wanted to make it because
//       I had a hard time maintaing my roster. Still having a domain, database and hosting costs money
//       after a certain point, so I might have to start asking for donations or figure out other ways to maintain
//       this. For now, well see how far the free plan on AWS take us.