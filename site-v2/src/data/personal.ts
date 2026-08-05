export interface PersonalProject {
  title: string;
  oneLine: string;
  /** 접힌 행 아래 메타 — ' · ' 로 이어 붙는다 */
  meta: string;
  /** 라벨 + 본문 블록 (구성 / 격리 / IaC·CI 등) */
  sections: { label: string; body: string }[];
  tech: string[];
  href?: string;
}

/** 개인 프로젝트 — 채우면 자동으로 행이 렌더되고, 비어 있으면 자리표시 슬롯이 보인다. */
export const personalProjects: PersonalProject[] = [
  {
    title: 'OpenStack Private Cloud IaC',
    oneLine:
      '물리 서버 1대에 DevStack all-in-one Private Cloud를 구축하고, VM 3대를 Terraform · cloud-init으로 선언 배포했습니다.',
    meta: '2026.07 · 개인 프로젝트 · 단독 설계·구축',
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
];
