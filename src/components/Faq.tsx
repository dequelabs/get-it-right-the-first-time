import { useState } from 'preact/hooks';

interface AccordianPanelProps {
  label: string
  children: any
}

const AccordianPanel = ({ label, children }: AccordianPanelProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const state = showDescription ? 'expanded' : 'collapsed';
  return (
    <>
      <div class={`question ${state}`} onClick={() => setShowDescription(!showDescription)}>{label}</div>
      {showDescription && (
        <p>
          {children}
        </p>
      )}
    </>
  );
};

const Faq = () => {
  return (
    <>
      <h2 id="faq">Frequently Asked Questions</h2>
      <aside class="faq" aria-describedby="faq">
        <ul>
          <li>
            <AccordianPanel label="How safe will my pizza be?">
              Yes
            </AccordianPanel>
          </li>
          <li>
            <AccordianPanel label="What happens if my pizza isn't delivered in time?">
              No
            </AccordianPanel>
          </li>
          <li>
            <AccordianPanel label="Should I be worried about these drones gaining sentience?">
              No, I for one will welcome our new flying pizza robotic overlords.
            </AccordianPanel>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Faq;