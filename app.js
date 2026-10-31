'use strict';

const translations = {
  ko: {
    skip:'본문으로 이동',brandSub:'공간 · 사람 · 웰빙',navResearch:'연구',navPublications:'논문',navTeaching:'수업',navAbout:'소개',navContact:'연락처',
    heroName:'이승희',heroRole:'전북대학교 주거환경학과 조교수',heroDescription:'일상의 공간이 사람의 삶에 미치는 영향을 탐구합니다. 주거환경, 회복 경험, 지속가능성을 연결하는 공간디자인 연구와 교육을 이어갑니다.',exploreResearch:'연구 살펴보기',heroDepartment:'Department of Housing Environmental Design',heroAlt:'주호, 주동, 단지의 관계를 표현한 개념적 주거공간 드로잉',conceptIllustration:'개념 일러스트레이션',recentPublication:'최근 논문',recentTitle:'공공임대주택의 공간 위계, 주거만족도와 웰빙',
    researchHeading:'공간에서 시작되는 더 나은 일상',researchIntro:'사람과 환경의 관계를 이해하고, 그 이해를 구체적인 공간의 변화로 연결합니다.',research1Title:'주거환경과 웰빙',research1Desc:'공공임대주택의 주호·주동·단지에서 거주자의 만족도와 심리적 회복 경험을 살펴보고, 삶의 질을 지원하는 환경을 탐구합니다.',research2Title:'지속가능한 공간디자인',research2Desc:'WELL, LEED, G-SEED와 SDGs를 바탕으로 건강과 환경의 가치를 함께 고려하는 주거·문화·실내공간의 디자인 전략을 연구합니다.',research3Title:'사용자 참여와 공간 경험',research3Desc:'현장 관찰과 인터뷰, 디자인 슈렛을 통해 사용자의 요구를 읽고, 다양한 경험과 생활 맥락을 공간 개선안에 담습니다.',research4Title:'디지털 공간디자인',research4Desc:'생성형 AI, 3D 모델링과 실시간 시각화를 디자인 과정에 연결합니다. 가상공간에서의 표현과 경험 평가를 연구·교육 방향으로 확장합니다.',projectsHeading:'주요 연구 과제',project1Title:'공공임대주택단지 거주자의 웰빙을 고려한 실내 환경 계획 및 디자인 모델 개발',project1Meta:'한국연구재단 · 책임연구원',project2Title:'서울시 주거 안전 취약계층 거처 상태 및 실태 조사',project2Meta:'서울시 · 공동연구원',project3Title:'웰빙을 고려한 업무 공간의 환경 디자인 평가 및 개선방안 연구',project3Meta:'한국연구재단 · 공동연구원',
    publicationsHeading:'연구를 담은 기록',viewScholar:'Google Scholar 프로필',filterAll:'전체',filterInternational:'국제학술지',filterDomestic:'국내학술지',searchPlaceholder:'논문 제목, 키워드 검색',selectedPublications:'Selected journal articles',publicationNote:'주요 학술지 논문을 수록했습니다. 개별 논문의 DOI·학술지 링크에서 상세 정보를 확인할 수 있습니다.',showMore:'논문 더 보기',showLess:'접어 보기',viewPaper:'논문 보기',copyCitation:'인용 복사',copied:'인용 정보가 복사되었습니다.',copyFallback:'아래 인용 정보를 선택해 복사해 주세요.',noResults:'검색 결과가 없습니다. 다른 키워드로 찾아보세요.',resetSearch:'검색 초기화',onlinePublication:'온라인 출판',firstOnline:'최초 온라인 출판',internationalLabel:'International',domesticLabel:'Korean journal',
    teachingHeading:'관찰에서 설계, 그리고 표현까지',teachingIntro:'실제 공간의 문제를 발견하고, 아이디어를 검증하며, 자신의 디자인 언어로 전달하는 과정을 함께합니다.',course1Category:'디지털 설계 · 시각화',course1Title:'디지털공간디자인2',course1Desc:'AI를 활용한 아이디어 탐색부터 3D 모델링, 실시간 렌더링까지. 디지털 도구를 통해 공간을 구체화하고 설계의 가능성을 비교합니다.',course1Detail:'여러 디자인 대안을 비교해 하나의 공간으로 발전시키고, 실제 공간의 리모델링을 제안합니다. 모델·이미지·패널을 통해 설계 의도를 전달합니다.',course2Category:'프로젝트 기반 학습 · 지역 연계',course2Title:'공간디자인스튜디오2',course2Desc:'현장과 사용자에 대한 이해를 바탕으로 실제 공간의 개선안을 제안합니다. 조사와 콘셉트, 계획과 시각화를 하나의 설계 과정으로 연결합니다.',course2Detail:'삼성문화회관 리모델링 프로젝트를 통해 지역과 문화의 연결을 탐구합니다. 현장 관찰, 사용자 시나리오, 팀 설계와 피드백을 거쳐 공간 개선안을 발전시킵니다.',course3Category:'디자인 커뮤니케이션 · 편집',course3Title:'디자인 포트폴리오',course3Desc:'프로젝트의 결과와 그 안에 담긴 사고 과정을 읽기 쉬운 이야기로 구성합니다. 나만의 관점과 디자인 역량을 설득력 있게 전달합니다.',course3Detail:'프로젝트 선정, 과정 정리, 페이지 구성과 시각적 위계를 다룹니다. 중간 피드백과 발표를 통해 포트폴리오의 완성도와 전달력을 높입니다.',course4Category:"심화 설계 · 공간계획",
    course4Title:"공간디자인스튜디오3",
    course4Desc:"사용자와 생활 맥락을 고려한 공간계획 역량을 심화합니다. 공간디자인 이론과 실습을 연결하고, 조사와 디자인 개념을 구체적인 공간 제안으로 발전시킵니다.",
    course4Detail:"공간의 문제를 읽고 설계의 방향을 정하는 과정에 초점을 둡니다. 공간 구성과 표현을 함께 다루며, 디자인 선택의 근거와 제안의 의미를 명확하게 전달하는 역량을 기릅니다.",
    course5Category:"색채 · 재료 · 공간의 조화",
    course5Title:"실내공간코디네이션",
    course5Desc:"색채, 재료, 가구와 조명 등 실내공간 요소의 관계를 탐구합니다. 사용자의 생활 방식과 공간의 기능을 고려하며, 여러 요소를 일관된 디자인으로 조율하는 감각을 기릅니다.",
    course5Detail:"색과 질감, 형태와 배치가 공간의 분위기와 사용 경험에 미치는 영향을 살펴봅니다. 기능과 심미성을 함께 고려하고, 요소 간의 조화를 통해 디자인 의도를 전달하는 데 초점을 둡니다.",
    course6Category:"통합 프로젝트 · 디자인의 완성",
    course6Title:"졸업작품",
    course6Desc:"전공에서 쌓은 지식과 디자인 경험을 하나의 졸업 프로젝트로 통합합니다. 주제의 의미를 탐구하고 공간 제안으로 발전시키며, 자신의 관점과 디자인 역량을 표현합니다.",
    course6Detail:"문제의식과 조사, 디자인 개념, 공간계획과 최종 표현을 하나의 논리로 연결합니다. 결과뿐 아니라 설계 선택의 근거와 과정도 함께 정리하여 프로젝트의 완성도와 전달력을 높입니다.",
    curriculumLink:"전북대학교 학과 교육과정",
    courseDetails:'수업 자세히 보기',
    portraitAlt:'이승희 교수',portraitCaption:'전북대학교 · 주거환경학과',aboutHeading:'공간과 사람 사이를 연구합니다.',aboutLead:'이승희는 전북대학교 주거환경학과 조교수로, 주거환경과 실내공간이 사람의 경험과 웰빙에 미치는 영향을 연구합니다.',aboutDescription:'프랑스에서 공간디자인을 공부하고 연세대학교에서 실내건축학 박사학위를 취득했습니다. 전시·공간디자인 실무 경험을 바탕으로, 사용자의 삶에 가까운 문제를 연구와 교육으로 연결합니다.',education:'학력',academicExperience:'주요 경력',currentYears:'2025–현재',careerCurrent:'전북대학교 조교수',careerTeaching:'가톨릭대 · 중앙대 · 연세대 강사',careerResearch:'Yonsei Symbiotic Life-Tech Lab 전문연구원',practiceExperience:'디자인 실무 경력',officialProfile:'전북대학교 공식 교수 소개',
    contactHeading:'더 나은 공간을 위한 대화',contactIntro:'연구 협력과 학술 교류, 공간디자인 교육에 관한 문의를 환영합니다.',affiliationLabel:'소속',contactAffiliation:'전북대학교 생활과학대학<br>주거환경학과',officeLabel:'연구실',contactOffice:'생활과학대학 513호<br>전북특별자치도 전주시 덕진구 백제대로 567',linksLabel:'바로가기',departmentLink:'주거환경학과 ↗',backToTop:'맨 위로',openMenu:'메뉴 열기',closeMenu:'메뉴 닫기'
  },
  en: {
    skip:'Skip to content',brandSub:'SPACE, PEOPLE & WELLBEING',navResearch:'Research',navPublications:'Publications',navTeaching:'Teaching',navAbout:'About',navContact:'Contact',
    heroName:'Seunghee Lee',heroRole:'Assistant Professor · Jeonbuk National University',heroDescription:'Exploring how everyday environments shape our lives. Research and teaching at the intersection of housing, restorative experience and sustainable spatial design.',exploreResearch:'Explore research',heroDepartment:'Department of Housing Environmental Design',heroAlt:'Conceptual axonometric drawing of housing at the unit, building and complex scales',conceptIllustration:'Concept illustration',recentPublication:'LATEST PAPER',recentTitle:'Spatial hierarchies, residential satisfaction and wellbeing',
    researchHeading:'Better living begins with space.',researchIntro:'Understanding the relationship between people and their environments—and translating that understanding into thoughtful spatial change.',research1Title:'Housing & Wellbeing',research1Desc:'Investigating residential satisfaction and psychological restoration across housing units, buildings and complexes, with a focus on public rental housing and quality of life.',research2Title:'Sustainable Environments',research2Desc:'Exploring design strategies that connect human wellbeing and sustainability through WELL, LEED, G-SEED and the SDGs in residential, cultural and interior spaces.',research3Title:'Participatory Spatial Design',research3Desc:'Bringing user needs and lived experience into spatial improvements through observation, interviews and design charrettes.',research4Title:'Digital Spatial Design',research4Desc:'Connecting generative AI, 3D modeling and real-time visualization with the design process, while exploring representation and experience evaluation in virtual environments.',projectsHeading:'Selected research projects',project1Title:'Interior environment planning and design models for resident wellbeing in public rental housing complexes',project1Meta:'National Research Foundation of Korea · Principal Researcher',project2Title:'Housing conditions of residents vulnerable to housing safety risks in Seoul',project2Meta:'Seoul Metropolitan Government · Co-researcher',project3Title:'Evaluation and improvement of workplace environmental design for wellbeing',project3Meta:'National Research Foundation of Korea · Co-researcher',
    publicationsHeading:'Research, in writing.',viewScholar:'Google Scholar profile',filterAll:'All',filterInternational:'International',filterDomestic:'Korean journals',searchPlaceholder:'Search titles, journals, keywords',selectedPublications:'Selected journal articles',publicationNote:'A selection of journal articles. Follow the DOI or journal links for publication details and access information.',showMore:'View more articles',showLess:'Show fewer',viewPaper:'Read article',copyCitation:'Copy citation',copied:'Citation copied to clipboard.',copyFallback:'Select and copy the citation below.',noResults:'No articles found. Try a different keyword.',resetSearch:'Reset search',onlinePublication:'Advance online publication',firstOnline:'First published online',internationalLabel:'International',domesticLabel:'Korean journal',
    teachingHeading:'From observation to expression.',teachingIntro:'Learning to identify spatial problems, test design ideas and communicate a clear, individual design perspective.',course1Category:'DIGITAL DESIGN · VISUALIZATION',course1Title:'Digital Space Design 2',course1Desc:'From AI-assisted ideation to 3D modeling and real-time rendering. Digital tools help students develop spatial proposals and compare design possibilities.',course1Detail:'Students compare alternative ideas, develop a selected spatial concept and propose the remodeling of a real space. Models, images and presentation panels communicate design intent.',course2Category:'PROJECT-BASED LEARNING · COMMUNITY',course2Title:'Space Design Studio 2',course2Desc:'Developing proposals for real spaces through an understanding of place and people. Research, concepts, planning and visualization become one connected design process.',course2Detail:'A remodeling project for the Samsung Cultural Center explores the relationship between local community and culture. Site observation, user scenarios, teamwork and critique inform spatial improvements.',course3Category:'DESIGN COMMUNICATION · EDITORIAL',course3Title:'Design Portfolio',course3Desc:'Turning design outcomes and the thinking behind them into a clear visual narrative. Students learn to express their own perspective and design capabilities.',course3Detail:'The course develops project selection, documentation, page composition and visual hierarchy. Interim reviews and presentations refine the portfolio and its communication.',course4Category:"ADVANCED STUDIO · SPATIAL PLANNING",
    course4Title:"Space Design Studio 3",
    course4Desc:"Developing spatial planning skills through an understanding of users and everyday contexts. The studio connects design theory and practice, turning research and concepts into spatial proposals.",
    course4Detail:"The focus is on interpreting spatial problems and establishing a clear design direction. Spatial composition and representation support the ability to explain design decisions and communicate the purpose of a proposal.",
    course5Category:"COLOR · MATERIALS · SPATIAL HARMONY",
    course5Title:"Interior Design Coordination",
    course5Desc:"Exploring relationships among color, materials, furniture and lighting. The course develops an eye for coordinating interior elements into a coherent design that responds to everyday life and spatial function.",
    course5Detail:"Color, texture, form and arrangement are considered in relation to atmosphere and use. The focus is on balancing function and aesthetics, using the relationships between interior elements to express a clear design intention.",
    course6Category:"INTEGRATED PROJECT · DESIGN SYNTHESIS",
    course6Title:"Integrated Graduation Project",
    course6Desc:"Bringing together knowledge and design experience in an integrated graduation project. Students explore the meaning of a chosen theme, develop a spatial proposal and articulate their own design perspective.",
    course6Detail:"A clear line of reasoning connects the initial question, research, design concept, spatial planning and final representation. Documenting both the outcome and the decisions behind it strengthens the project and its communication.",
    curriculumLink:"Department curriculum",
    courseDetails:'Explore the course',
    portraitAlt:'Portrait of Seunghee Lee',portraitCaption:'Housing Environmental Design · JBNU',aboutHeading:'Connecting people and place.',aboutLead:'Seunghee Lee is an Assistant Professor in the Department of Housing Environmental Design at Jeonbuk National University. Her research explores how residential and interior environments relate to human experience and wellbeing.',aboutDescription:'She studied space design in France and earned her Ph.D. in Interior Architecture and Built Environment at Yonsei University. Experience in exhibition and spatial design informs her research and teaching on the places of everyday life.',education:'Education',academicExperience:'Academic experience',currentYears:'2025–Present',careerCurrent:'Assistant Professor · Jeonbuk National University',careerTeaching:'Lecturer · The Catholic University of Korea, Chung-Ang University & Yonsei University',careerResearch:'Researcher · Yonsei Symbiotic Life-Tech Lab',practiceExperience:'Design practice',officialProfile:'Official JBNU faculty profile',
    contactHeading:'A conversation about better spaces.',contactIntro:'For research collaboration, academic exchange and spatial design education.',affiliationLabel:'AFFILIATION',contactAffiliation:'Department of Housing Environmental Design<br>College of Human Ecology · JBNU',officeLabel:'OFFICE',contactOffice:'Room 513, College of Human Ecology<br>567 Baekje-daero, Deokjin-gu, Jeonju, South Korea',linksLabel:'ELSEWHERE',departmentLink:'Department website ↗',backToTop:'Back to top',openMenu:'Open menu',closeMenu:'Close menu'
  }
};

const state={lang:'en',filter:'all',query:'',expanded:false};
const publications=Array.isArray(window.PUBLICATIONS)?window.PUBLICATIONS:[];
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const t=key=>translations[state.lang][key]??translations.ko[key]??key;
const menuToggle=document.getElementById('menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
let toastTimer;

function announce(message){
  const toast=document.getElementById('toast');
  clearTimeout(toastTimer);
  toast.textContent=message;
  toast.hidden=false;
  toastTimer=setTimeout(()=>{toast.hidden=true;},3000);
}

function closeMenu(){
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label',t('openMenu'));
  mobileNav.hidden=true;
}

function setLanguage(lang){
  state.lang=lang==='en'?'en':'ko';
  document.documentElement.lang=state.lang;
  document.title=state.lang==='ko'?'이승희 · Seunghee Lee | Space, People & Wellbeing':'Seunghee Lee | Space, People & Wellbeing';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const text=t(el.dataset.i18n);
    if(text.includes('<br>')){
      const pieces=text.split('<br>');
      el.replaceChildren(...pieces.flatMap((piece,i)=>i?[document.createElement('br'),document.createTextNode(piece)]:[document.createTextNode(piece)]));
    }else el.textContent=text;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{el.alt=t(el.dataset.i18nAlt);});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);el.setAttribute('aria-label',t(el.dataset.i18nPlaceholder));});
  document.querySelectorAll('[data-set-lang]').forEach(el=>{
    const active=el.dataset.setLang===state.lang;
    el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));
  });
  menuToggle.setAttribute('aria-label',t(menuToggle.getAttribute('aria-expanded')==='true'?'closeMenu':'openMenu'));
  const officialProfile=document.querySelector('.about-copy > .text-link');
  officialProfile.href=state.lang==='ko'?'https://housing.jbnu.ac.kr/jbnuProfl/housing/947/8233/artclView.do':'https://top.jbnu.ac.kr/jbnuProfl/housingeng/974/8418/artclView.do';
  const departmentLink=document.querySelector('[data-i18n="departmentLink"]');
  departmentLink.href=state.lang==='ko'?'https://housing.jbnu.ac.kr/housing/index.do':'https://housing.jbnu.ac.kr/housingeng/index.do';
  renderPublications();
}

function articleTitle(pub){
  // Retain original Korean article titles in citations; use journal-supplied English titles in English view.
  return state.lang==='en'&&pub.title_en?pub.title_en:pub.title;
}

function formattedJournal(pub){
  const journal=state.lang==='en'&&pub.journal_en?pub.journal_en:pub.journal;
  const volume=pub.volume?`, ${pub.volume}${pub.issue?`(${pub.issue})`:''}`:'';
  const pages=pub.pages?`, ${pub.pages}`:'';
  const online=pub.status==='Advance online publication'?` · ${t('onlinePublication')}`:'';
  const first=pub.online_year&&pub.online_year!==pub.year?` · ${t('firstOnline')} ${pub.online_year}`:'';
  return `${journal}${volume}${pages}${online}${first}`;
}

function renderPublications(){
  const query=state.query.trim().toLocaleLowerCase();
  const matched=publications.filter(pub=>{
    const categoryOK=state.filter==='all'||state.filter===pub.category;
    const searchable=[pub.title,pub.title_en,pub.journal,pub.journal_en,pub.year,...pub.authors,...(pub.authors_en??[]),...(pub.themes??[]),pub.summary_ko,pub.summary_en].filter(Boolean).join(' ').toLocaleLowerCase();
    return categoryOK&&(!query||query.split(/\s+/).every(word=>searchable.includes(word)));
  });
  const visible=state.expanded?matched:matched.slice(0,4);
  const list=document.getElementById('publication-list');
  list.innerHTML=visible.map(pub=>{
    const authors=(state.lang==='en'&&pub.authors_en?pub.authors_en:pub.authors).map(name=>{
      const safe=escapeHTML(name);
      return /^(이승희|Seung-?hee Lee|Seung-Hee Lee)$/i.test(name)?`<strong>${safe}</strong>`:safe;
    }).join(' · ');
    const badge=pub.category==='international'?t('internationalLabel'):t('domesticLabel');
    const theme=(pub.themes??[]).slice(0,2).map(v=>({'housing':'Housing','wellbeing':'Wellbeing','sustainability':'Sustainability','cultural-space':'Cultural space','participatory-design':'Participatory design'}[v]??v)).join(' / ');
    return `<article class="publication ${escapeHTML(pub.category)}" data-publication-id="${escapeHTML(pub.id)}"><div class="publication-year">${escapeHTML(pub.year)}</div><div class="publication-body"><div class="publication-badges"><span class="publication-badge">${escapeHTML(badge)}</span><span>${escapeHTML(theme)}</span></div><h3><a href="${escapeHTML(pub.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(articleTitle(pub))}</a></h3><p class="publication-authors">${authors}</p><p class="publication-journal">${escapeHTML(formattedJournal(pub))}</p><p class="publication-summary">${escapeHTML(state.lang==='ko'?pub.summary_ko:pub.summary_en)}</p><div class="publication-actions"><a href="${escapeHTML(pub.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('viewPaper'))} ↗</a><button type="button" class="copy-citation" data-copy-citation="${escapeHTML(pub.id)}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M4 4h8v9H4zM2 10H1V1h8v1"/></svg>${escapeHTML(t('copyCitation'))}</button></div></div><a class="publication-arrow" href="${escapeHTML(pub.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(t('viewPaper')+': '+articleTitle(pub))}">↗</a></article>`;
  }).join('');
  if(!matched.length)list.innerHTML=`<div class="empty-state"><p>${escapeHTML(t('noResults'))}</p><button type="button" id="reset-publication-search">${escapeHTML(t('resetSearch'))}</button></div>`;
  document.getElementById('publication-count').textContent=state.lang==='ko'?`${matched.length}편 중 ${visible.length}편 표시`:`Showing ${visible.length} of ${matched.length} articles`;
  const more=document.getElementById('show-more-publications');
  more.hidden=matched.length<=4;
  more.setAttribute('aria-expanded',String(state.expanded));
  more.setAttribute('aria-controls','publication-list');
  more.innerHTML=`<span>${escapeHTML(t(state.expanded?'showLess':'showMore'))}${state.expanded?'':` (${matched.length-4})`}</span><span aria-hidden="true">${state.expanded?'↑':'↓'}</span>`;
  document.querySelectorAll('[data-filter]').forEach(button=>{
    const active=button.dataset.filter===state.filter;
    button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
}

function citationText(pub){
  const authors=(pub.authors_en??pub.authors).join(', ');
  let citation=`${authors} (${pub.year}). ${pub.title}. ${pub.journal}`;
  if(pub.volume)citation+=`, ${pub.volume}${pub.issue?`(${pub.issue})`:''}`;
  if(pub.pages)citation+=`, ${pub.pages}`;
  if(pub.status==='Advance online publication')citation+=' (Advance online publication)';
  return `${citation}. ${pub.url}`;
}

async function copyCitation(id,button){
  const pub=publications.find(p=>p.id===id);
  if(!pub)return;
  const citation=citationText(pub);
  try{
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(citation);
    announce(t('copied'));
  }catch{
    const parent=button.closest('.publication-body');
    parent.querySelector('.citation-fallback-label')?.remove();
    const label=document.createElement('label');label.className='citation-fallback-label';label.textContent=t('copyFallback');
    const field=document.createElement('textarea');field.className='citation-fallback';field.value=citation;field.readOnly=true;field.rows=4;
    label.appendChild(field);parent.appendChild(label);field.focus();field.select();announce(t('copyFallback'));
  }
}

document.querySelectorAll('[data-set-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.setLang)));
menuToggle.addEventListener('click',()=>{
  const willOpen=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(willOpen));menuToggle.setAttribute('aria-label',t(willOpen?'closeMenu':'openMenu'));mobileNav.hidden=!willOpen;
});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileNav.hidden){closeMenu();menuToggle.focus();}});
window.matchMedia('(min-width: 701px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{state.filter=button.dataset.filter;state.expanded=false;renderPublications();}));
document.getElementById('publication-search').addEventListener('input',event=>{state.query=event.target.value;state.expanded=false;renderPublications();});
document.getElementById('show-more-publications').addEventListener('click',()=>{
  const wasExpanded=state.expanded;state.expanded=!state.expanded;renderPublications();
  if(wasExpanded)document.querySelector('.publication-toolbar').scrollIntoView({block:'start',behavior:'smooth'});
});
document.getElementById('publication-list').addEventListener('click',event=>{
  const copy=event.target.closest('[data-copy-citation]');
  if(copy)copyCitation(copy.dataset.copyCitation,copy);
  if(event.target.closest('#reset-publication-search')){state.query='';state.filter='all';state.expanded=false;document.getElementById('publication-search').value='';renderPublications();document.getElementById('publication-search').focus();}
});

if('IntersectionObserver' in window){
  const navLinks=document.querySelectorAll('.desktop-nav a');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>{
      const current=link.hash===`#${entry.target.id}`;link.classList.toggle('current',current);
      if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    });}});
  },{rootMargin:'-15% 0px -65% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
}

setLanguage('en');
document.getElementById('copyright-year').textContent=new Date().getFullYear();
