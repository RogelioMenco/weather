import moment from 'moment';

const AppFooter = () => {
  const year = moment().year();

  return (
    <footer>
      <div className="p-3 bg-slate-900 bottom-0 mx-auto text-slate-600">
        <center>
          <b>
            Weather Status | {''}
            <a
              href="https://github.com/RogelioMenco/weather"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </b>
          <p>{year}. Rogelio Menco</p>
        </center>
      </div>
    </footer>
  );
};

export default AppFooter;
