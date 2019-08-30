---

title: API  de droits à l'Assurance Maladie

tagline: Pour accélérer vos démarches en lien avec l'assurance maladie, automatisez la récupération des droits à l’Assurance Maladie de vos clients

external_site: https://app.swaggerhub.com/apis/netmeecom/beneficiaires/v1-apim

logo: cnam.png

contract: OUVERT avec convention

stat: le lien vers une métrique démontrant l’intérêt de l’api

  lastXdays: 30

  url: https://monitoring.ameli.fr/api/stats/

  label: justificatifs papier évités lors des 30 derniers jours

clients:

  - établissements de soins si éligibles à France Connect

  - organismes complémentaires en santé

partners:

  - CNAM

owner: Caisse Nationale d'Assurance Maladie (CNAM)

keywords:

  - droits à assurance maladie

  - prise en charge au titre du régime obligatoire, exonérations

  - médecin traitant

score:

  detail:

    access: le lien vers le processus d’inscription des clients à l’api

      link: https://signup.api.gouv.fr/api_droits_cnam

      description:

<p>Cette API est réservée aux établissements de soins pour leur démarche de pré admission et aux organismes complémentaires en santé pour faciliter leur démarche d’adhésion.</p>

<p>Cette API fonctionne uniquement avec FranceConnect; le candidat à l’utilisation de cette API doit être préalablement "fournisseur de services" FranceConnect.</p>

<p>Cette API est réservée aux établissements de soins pour leur démarche de pré admission et aux organismes complémentaires en santé pour faciliter leur démarche d’adhésion.</p>

<p>L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie. Les données accessibles dépendent également du cas d’usage.</p>

<p>La Caisse Nationale se réserve le droit d’évaluer l’éligibilité des candidats au regard des cas d’usage indiqués.</p>

<p>Les demandes d'accès pour l'API Attestation de droits à l'Assurance Maladie utilisent signup.api.gouv.fr, un outil mis à disposition pour toutes les API catalogués sur api.gouv.fr.</p>

    rate_limiting:

      description: |

        <p>Les éventuelles limitations d’usage vis-à-vis d’un partenaire sont incluses dans la convention.</p>



    contact:

      link: contact@api.gouv.fr

    doc_tech:

      link: https://app.swaggerhub.com/apis/netmeecom/beneficiaires/v1-apim

    monitoring:

      link: https://stats.uptimerobot.com/3wEv6hppvv

      description: |

        <p>Une supervision du service en temps réel est disponible à cette adresse.</p>

---

## API attestation de droits à l'Assurance Maladie

Cette API retourne les droits, d’un individu ou d’une famille, gérés par le régime général de l’Assurance Maladie.

Elle permet ainsi de connaître pour chaque individu d’une famille, sa caisse gestionnaire et son niveau de couverture (droits de base, droits à une complémentaire santé solidaire,médecin traitant)

L’utilisation de l’API est soumise à une convention d’usage avec la Caisse Nationale d’Assurance Maladie. D’autres cas d’usages pourront être étudiés ultérieurement.
