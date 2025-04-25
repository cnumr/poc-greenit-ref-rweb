import Link from 'next/link';
import { PersonasConnectionQuery } from '../../../tina/__generated__/types';
import personasData from './personas.preval';
import { ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

export async function generateStaticParams() {
  const lang = Object.keys(ui);
  return lang.map((lang) => ({ lang }));
}

function getPersonasData(lang: string) {
  const { data }: { data: PersonasConnectionQuery } = personasData;
  const entries = data.personasConnection.edges?.filter(
    (e) => e?.node?.language === lang
  );
  return entries;
}

export default async function Home({ params }) {
  const { lang } = params;
  const entries = getPersonasData(lang);
  
  return <PersonasContent entries={entries} lang={lang} />;
}

function PersonasContent({ entries, lang }) {
  const t = useTranslations(lang);

  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div className="group flex flex-col gap-4">
        <h1 className="mb-2">{t('Personas')}</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 group-has-[#bt-view:checked]:hidden">
            <ul
              className="wp-list"
              data-pagefind-ignore>
              {entries?.map((entry) => {
                if (entry?.node) {
                  return (
                    <>
                      <Link
                        key={entry?.node.id}
                        href={`/${lang}/personas/${entry.node._sys.filename}`}>
                        {entry.node.title}
                      </Link>
                    </>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
