---
layout: page
permalink: /publications/
title: Publications
description: Listed by categories in reversed chronological order, where + indicates equal contribution and * denotes corresponding author. 
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

I have published some papers in refereed journals and conferences, including DM venues (e.g., KDD\*7, WWW\*4, ICDE\*2, TKDE\*5, TMC\*1), AI venues (e.g., TPAMI\*1, AI Journal\*2, NeurIPS\*5, IJCAI\*4, AAAI\*5, ICLR\*1), and CV venues (e.g., ECCV\*1, MM\*3). Here are some representative papers:

- **Spatio-Temporal (ST) Data Mining**: 
  - ST graph forecasting: [[NeurIPS'23]](https://openreview.net/pdf?id=17Zkztjlgt), [[KDD'23]](https://di.ustc.edu.cn/_upload/tpl/11/ea/4586/template4586/assets/images/papers/zzy/CauSTG.pdf), [[SIGSPATIAL'23]](https://arxiv.org/pdf/2301.13629.pdf), [[TKDE'22]](https://ieeexplore.ieee.org/document/9956738/), [[SIGSPATIAL'22]](https://arxiv.org/pdf/2108.11873.pdf), [[TKDE'20]](http://urban-computing.com/pdf/MetaLearning_tkde_2020.pdf), [[KDD'19]](http://urban-computing.com/pdf/kdd_2019_camera_ready_ST_MetaNet.pdf)
  - ST Grid modeling: [[AAAI'24]](), [[WWW'21]](http://urban-computing.com/pdf/WWW2021UrbanFlowPrediction.pdf), [[TKDE'20]](http://urban-computing.com/pdf/TKDE_UrbanFlowInfer.pdf), [[TKDE'20]](http://urban-computing.com/pdf/MVGCN_Final_Version.pdf), [[KDD'19]](http://urban-computing.com/pdf/yuxuanUrbanFMKDD2019.pdf)
  - ST Trajectory modeling: [[ICDE'23]](https://arxiv.org/abs/2210.05155), [[CIKM'22]](https://zhangjunbo.org/pdf/2022_CIKM_TrajFormer.pdf), [[IJCAI'21]](https://www.ijcai.org/proceedings/2021/0207.pdf)
  - AutoML for ST data: [[AI'23]](https://www.sciencedirect.com/science/article/abs/pii/S0004370223000450), [[WWW'21]](http://panzheyi.cc/publication/pan2021autostg/paper.pdf), [[KDD'21]](http://urban-computing.com/pdf/AutoST_kdd20_camera_ready.pdf)
  - Applications: [[AAAI'24]](), [[KDD'23]](https://arxiv.org/pdf/2305.18719.pdf), [[AAAI'23]](https://arxiv.org/pdf/2211.15979.pdf), [[UBICOMP'21]](http://urban-computing.com/pdf/paper_UbiComp20-Ruan.pdf), [[TVCG'21]](http://urban-computing.com/pdf/TVCG_viscas.pdf), [[AAAI'20]](http://urban-computing.com/pdf/AAAI-RuanS.361.pdf), [[IJCAI'18]](https://www.ijcai.org/Proceedings/2018/0476.pdf), [[SIGSPATIAL'17]](https://www.ijcai.org/Proceedings/2018/0476.pdf), [[IJCAI'16]](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/06/ijcai16-Zheng-water-quality.pdf)
 

- **Graph Mining**:
  - Graph learning: [[ICLR'23]](https://openreview.net/pdf?id=Dvs-a3aymPe), [[WWW'21]](https://bhooi.github.io/papers/curgraph_web21.pdf), [[NeurIPS'21]](https://proceedings.neurips.cc/paper/2021/file/a3048e47310d6efaa4b1eaf55227bc92-Paper.pdf), [[NeurIPS'20]](https://proceedings.neurips.cc/paper/2020/file/cffb6e2288a630c2a787a64ccc67097c-Paper.pdf)
  - Graph augmentation: [[WWW'21]](https://dl.acm.org/doi/abs/10.1145/3442381.3449796?casa_token=ld3tJXow02AAAAAA:k6qS_Tsxym4YyANwQn8a-0Xf98Y0jD_gfTpPt8wocORTvaGRThRLseXYuvLbO8RU_EC0k6gAX6T7dg), [[NeurIPS'21]](https://proceedings.neurips.cc/paper/2021/file/0b0b0994d12ad343511adfbfc364256e-Paper.pdf), [[KDD'20]](https://bitbucket.org/ghentdatascience/ecmlpkdd20-papers/raw/master/RT/sub_221.pdf)
  - Applications: [[KDD'22]](https://arxiv.org/pdf/2207.05584.pdf)

- **Computer Vision**:
[[MM'23]](https://dl.acm.org/doi/pdf/10.1145/3503161.3548102), 
[[ECCV'22]](https://dl.acm.org/doi/abs/10.1007/978-3-031-19830-4_33), 
[[MM'22]](https://dl.acm.org/doi/pdf/10.1145/3503161.3548102), 
[[MM'21]](https://dl.acm.org/doi/pdf/10.1145/3474085.3475268).


<!-- See more at [[Google Scholar]](https://scholar.google.com/citations?hl=zh-CN&user=n9cODgcAAAAJ&view_op=list_works&sortby=pubdate)[[DBLP]](https://dblp.org/pid/183/0977.html). -->



<div class="publications">
{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
