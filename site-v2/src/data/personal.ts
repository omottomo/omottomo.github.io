export interface PersonalProject {
  title: string;
  oneLine: string;
  /** 접힌 행 아래 메타 — ' · ' 로 이어 붙는다 */
  meta: string;
  /** 라벨 + 본문 블록 (구성 / 격리 / IaC·CI 등) */
  sections: { label: string; body: string }[];
  tech: string[];
  href?: string;
  /** 실제 배포된 결과물 주소 — 있으면 저장소 링크와 함께 노출된다 */
  siteHref?: string;
}

/** 개인 프로젝트 — 채우면 자동으로 행이 렌더되고, 비어 있으면 자리표시 슬롯이 보인다. */
export const personalProjects: PersonalProject[] = [
  {
    title: 'DevStack을 통한 Local Private Cloud 환경 구축',
    oneLine:
      'OpenStack을 학습하기 위해 DevStack을 사용하여 물리 서버 1대에 all-in-one Private Cloud를 구축하고, VM 3대를 Terraform · cloud-init을 사용해 배포하였습니다.',
    meta: '2026.07 · 개인 프로젝트',
    sections: [
      {
        label: '구성',
        body:
          'PC 1대에 DevStack으로 Keystone · Nova · Neutron · Glance · Cinder · Horizon을 올리고, Internal Net(10.0.10.0/24) 위에 web · db · monitoring VM 3대를 배치했습니다.',
      },
      {
        label: '격리',
        body:
          '공유기 포트 포워딩을 두지 않아 외부 유입 경로 자체를 없애고, DHCP 범위(.2~.199)와 Floating IP Pool(.200~.220)을 분리했습니다. db-vm은 Floating IP 없이 출발지를 web-sg로만 허용해 web-vm 경유로만 접근됩니다.',
      },
      {
        label: 'IaC · CI',
        body:
          '자원 생성·변경은 Terraform으로만 실행되게 하고 서비스는 cloud-init으로 배포했습니다. 노트북의 GitLab CE가 push마다 fmt · tflint · validate · tfsec 4종을 수행하며, 전체 삭제 후 terraform apply 1회로 동일 환경이 재생성되는 것을 검증했습니다.',
      },
    ],
    tech: [
      'OpenStack',
      'Terraform',
      'cloud-init',
      'GitLab CI',
      'Prometheus',
      'Grafana',
      'Flask',
      'MySQL',
    ],
    href: 'https://github.com/omottomo/openstack-private-cloud-iac',
  },
  {
    title: 'LLM Wiki',
    oneLine:
      '안드레이 카파시(Andrej Karpathy)의 "LLM wiki" 개념을 따라 구축한 LLM Wiki',
    meta: '2026.06 – 운영 중 · 개인 프로젝트 · 단독 설계·구축',
    sections: [
      {
        label: '문제',
        body:
          'AI로 인해 기술은 빠르게 발전하고, 눈 떠보면 매일 새로운 기술과 개념이 등장하고 있습니다. 새로운 기술과 개념을 공부하고 체득한 뒤 이해한 내용을 글로 기록하는 기존의 학습 방법은 아직 필수적이라 생각합니다. 다만 변화하는 시대 흐름에 맞춰 지식을 학습하고 기록하는 방식도 어느 정도 변화할 필요가 있다고 느끼고 있었습니다.',
      },
      {
        label: '구성',
        body:
          '원문 → 위키 페이지 → 정적 사이트로 이어지는 파이프라인을 만들고, 에이전트에게 사서 역할을 부여했습니다. 원문 1건에 요약 페이지 1쪽이 대응하고, 새 자료가 기존 서술과 충돌하면 지우지 않고 양쪽을 남긴 뒤 모순으로 표시합니다. 사이트는 프레임워크 없이 파이썬 스크립트 하나로 렌더하고 Pagefind로 한글 전문 검색을 붙였습니다.',
      },
      {
        label: '검증',
        body:
          '역할을 문서가 아니라 기계 검사로 강제했습니다. 원문↔요약 1:1 대응, 페이지 간 링크 무결성, 원문이 발행물에 새어 나가지 않았는지를 각각 검사하는 스크립트가 CI에서 돌고, 머지 전에 통과하지 못하면 룰셋이 머지를 막습니다. 골든·결함 픽스처 26종으로 검사기 자체의 퇴화도 잡습니다.',
      },
      {
        label: '배포',
        body:
          'Terraform으로 S3 · CloudFront · ACM · Route53을 선언 관리하고, GitHub Actions에서 장기 자격증명 없이 OIDC로 역할을 맡아 배포합니다. 저장소를 공개할 때는 제3자 저작물인 원문을 히스토리 전체에서 분리해 별도 비공개 저장소로 옮겼습니다.',
      },
    ],
    tech: [
      'Python',
      'Terraform',
      'AWS S3',
      'CloudFront',
      'GitHub Actions',
      'OIDC',
      'Pagefind',
    ],
    href: 'https://github.com/omottomo/llm-wiki',
    siteHref: 'https://omotomo-llm-wiki.com',
  },
];
