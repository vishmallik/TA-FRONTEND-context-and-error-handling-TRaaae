import ErrorBoundarySectionOne from "./ErrorBoundarySectionOne";
import ErrorBoundarySectionTwo from "./ErrorBoundarySectionTwo";
import ErrorBoundaryLocation from "./ErrorBoundaryLocation";
import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundarySectionOne>
          <SectionOne />
        </ErrorBoundarySectionOne>
        <ErrorBoundarySectionTwo>
          <SectionTwo />
        </ErrorBoundarySectionTwo>
        <ErrorBoundaryLocation>
          <Location />
        </ErrorBoundaryLocation>
      </div>
    </section>
  );
}

export default Main;
