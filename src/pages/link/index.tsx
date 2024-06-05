import Link from "next/link";

export default function Doublecomp() {
  type SubItems = {
    id: string;
    title: string;
    description?: string;
    url: string;
  };

  type menuItem = {
    id: string;
    heading: string;
    description?: string;
    url: string;
  };

  type DoubleMenuItem = {
    id: string;
    title: string;
    description: string;
    subItems: SubItems[];
  };

  type DataSingleDropdownProps = {
    heading: string;
    outerCountry?: boolean | null;
    items: SubItems[];
  };

  type DataDoubleDropdownProps = {
    heading: string;
    outerCountry?: boolean | null;
    items: DoubleMenuItem[];
  };
  // Changed Doublecomp to arrow function component
  const data: DataDoubleDropdownProps = {
    heading: "Location",
    items: [
      {
        id: "main_1",
        title: "Us Virtual Assistants",
        description: "Top Virtual Assistants in USA",
        subItems: [
          {
            id: "submain_1_1",
            title: "New York",
            description: "Top Virtual Assistants In New York",
            url: "/new-york-virtual-assistants",
          },
          {
            id: "submain_1_2",
            title: "Los Angeles",
            description: "   Top Virtual Assistants In Los Angeles",
            url: "/los-angeles-virtual-assistants",
          },
        ],
      },
      {
        id: "main_2",
        title: "Vas in Europe",
        description: "Top Virtual Assistants in USA",
        subItems: [
          {
            id: "submain_2_1",
            title: "Berlin",
            description: " Top Virtual Assistants In Berlin",
            url: "/berlin-virtual-assistants",
          },
          {
            id: "submain_2_2",
            title: "Dublin",
            description: "Top Virtual Assistants In Dublin",
            url: "/dublin-virtual-assistants",
          },
        ],
      },
      {
        id: "main_3",
        title: "Vas in Asia",
        description: "Top Virtual Assistants in USA",
        subItems: [
          {
            id: "submain_3_1",
            title: "Dubai",
            description: " Top Virtual Assistants In Dubai",
            url: "/dubai-virtual-assistants",
          },
          {
            id: "submain_2_2",
            title: "Singapore",
            description: "Top Virtual Assistants In Singapore",
            url: "/singapore-virtual-assistants",
          },
          {
            id: "submain_2_3",
            title: "Hong-Kong",
            description: "Top Virtual Assistants In Hong-Kong",
            url: "/singapore-virtual-assistants",
          },
          {
            id: "submain_2_4",
            title: "Sydney",
            description: "Top Virtual Assistants In Sydney",
            url: "/singapore-virtual-assistants",
          },
        ],
      },
    ],
  };

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown2"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        {data.heading}
      </a>
      <ul
        className="dropdown-menu Resources-dropdown"
        aria-labelledby="navbarDropdown2"
      >
        <div className="Resources-dropdown-left">
          <div
            className="accordion accordion-flush find-job-dropdown-list overflow-y-auto nav-dropdown-scrollbar"
            id={`${data.heading}AccordionFlush`}
            style={{ maxHeight: "82vh", borderRadius: "8px" }}
          >
            {data &&
              data.items &&
              data.items.map((item) => (
                <div className="accordion-item border-0" key={item.id}>
                  <h2 className="accordion-header" id={`main-${item.id}`}>
                    <button
                      className="accordion-button collapsed d-inline-block"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#main-${item.id}-collapseOne`}
                      aria-expanded="false"
                      aria-controls={`main-${item.id}-collapseOne`}
                    >
                      <div className="find-job-dropdown-smallbox" />
                      <div
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        className="find-job-dropdown-content"
                      >
                        {item.title}
                        <span>{item.description}</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id={`main-${item.id}-collapseOne`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`main-${item.id}`}
                    data-bs-parent={`#${data.heading}AccordionFlush`}
                  >
                    <div className="accordion-body">
                      {item &&
                        item.subItems &&
                        item.subItems.map((subItem) => (
                          <li
                            className="dropdown-item dropdown"
                            key={subItem.id}
                          >
                            <Link className="dropdown-item " href={subItem.url}>
                              <div className="find-job-dropdown-smallbox" />
                              <Link
                                href={subItem.url} // Fixed href attribute
                                prefetch={false}
                                passHref={true}
                                legacyBehavior
                              >
                                <div
                                  data-toggle="collapse"
                                  data-target=".navbar-collapse"
                                  className="find-job-dropdown-content"
                                >
                                  {subItem.title}
                                  <span>{subItem.description}</span>
                                </div>
                              </Link>
                            </Link>
                          </li>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </ul>
    </li>
  );
}
