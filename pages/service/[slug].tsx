import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';

import { getService, IService, getAllServices } from '../../model';

import constants from '../../constants';

import Page from '../../layouts/page';

import APICard from '../../components/searchApis/apiCard';
import { HEADER_PAGE } from '../../components';

interface IProps extends IService {}

const Service: React.FC<IProps> = ({
  title,
  description,
  link,
  apiList,
  body,
  screenshot,
}) => {
  return (
    <Page
      headerKey={HEADER_PAGE.SERVICES}
      title={title}
      description={`${title} est un exemple d’utilisation d'API du service public. ${description}`}
    >
      <section id="title" className="ui vertical center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">{title}</h1>

          <h2 className="ui inverted header">{description}</h2>

          <a
            className="large ui secondary button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Accédez au service &nbsp;<i className="rocket icon"></i>
          </a>
        </div>
      </section>

      <div className="content-container content">
        <div className="ui stackable grid">
          <div className="row">
            <div className="five wide column">
              <h3 className="ui divider horizontal">
                {apiList.length > 1 ? 'Les API utilisées' : 'API utilisée'}
              </h3>
              <div className="ui segments">
                {apiList.map(api => (
                  <APICard
                    key={api.slug}
                    {...api}
                    path={api.path}
                    logo={api.logo}
                  />
                ))}
              </div>
            </div>
            <div className="eleven wide column">
              <div className="markdown-body">
                <ReactMarkdown source={body} />
              </div>
              <div>
                <img
                  className="ui bordered rounded fluid image"
                  src={`/images/service-screenshot/${screenshot}`}
                  alt={`capture d'écran de ${title}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #title {
          padding-top: 5%;
          padding-bottom: 5%;
          margin-bottom: 2%;
          background: ${constants.colors.backgroundBlueGradient};
        }

        h1 {
          padding: 0.2em 0;
        }

        h2 {
          padding: 0.2em 0;
        }

        .logoAPI {
          margin-top: 0.5em;
        }

        .markdown-body {
          border: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
          margin-top: 2em;
          margin-bottom: 2em;
        }

        .ui.segments {
          border: none;
        }

        .content {
          margin-bottom: 3em;
        }
      `}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const services = await getAllServices();

  return {
    paths: services.map(service => {
      return {
        params: {
          slug: service.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const serviceName = params.slug;

  //@ts-ignore
  const service = await getService(serviceName);

  return {
    props: {
      ...service,
    },
  };
};

export default Service;
