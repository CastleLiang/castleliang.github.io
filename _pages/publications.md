---
layout: page
permalink: /publications/
title: Publications
description: Listed by categories in reversed chronological order, where + indicates equal contribution and * denotes corresponding author. 
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

I have published some papers in refereed journals and conferences, including DM venues (e.g., KDD\*5, WWW\*4, TKDE\*4), AI venues (e.g., NeurIPS\*3, IJCAI\*4, AAAI\*2, ICLR\*1), and CV venues (e.g., ECCV\*1, MM\*2). Here are some representative papers:

- **Spatio-Temporal Data Mining**: 
[[AAAI'23]](https://arxiv.org/pdf/2211.15979.pdf), 
[[TKDE'22]](https://ieeexplore.ieee.org/document/9956738/), 
[[SIGSPATIAL'22]](https://arxiv.org/pdf/2108.11873.pdf), 
<!-- [[SIGSPATIAL'22]](https://dl.acm.org/doi/pdf/10.1145/3557915.3560947),  -->
<!-- [[CIKM'22]](https://zhangjunbo.org/pdf/2022_CIKM_TrajFormer.pdf),  -->
[[IJCAI'21]](https://www.ijcai.org/proceedings/2021/0207.pdf), 
[[WWW'21]](http://urban-computing.com/pdf/WWW2021UrbanFlowPrediction.pdf), 
[[WWW'21]](http://panzheyi.cc/publication/pan2021autostg/paper.pdf),
<!-- [[TVCG'21]](http://urban-computing.com/pdf/TVCG_viscas.pdf), -->
<!-- [[ECML-PKDD'21]](http://urban-computing.com/pdf/2020-ECML-final.pdf), -->
[[KDD'21]](http://urban-computing.com/pdf/AutoST_kdd20_camera_ready.pdf),
<!-- [[TKDE'20]](http://urban-computing.com/pdf/TKDE_UrbanFlowInfer.pdf), -->
[[TKDE'20]](http://urban-computing.com/pdf/MVGCN_Final_Version.pdf),
<!-- [[TKDE'20]](http://urban-computing.com/pdf/MetaLearning_tkde_2020.pdf), -->
<!-- [[TBD'20]](http://urban-computing.com/pdf/ieeetbd2020_UrbanWater.pdf), -->
[[UBICOMP'21]](http://urban-computing.com/pdf/paper_UbiComp20-Ruan.pdf),
[[AAAI'20]](http://urban-computing.com/pdf/AAAI-RuanS.361.pdf),
[[KDD'19]](http://urban-computing.com/pdf/yuxuanUrbanFMKDD2019.pdf),
[[KDD'19]](http://urban-computing.com/pdf/kdd_2019_camera_ready_ST_MetaNet.pdf),
[[IJCAI'18]](https://www.ijcai.org/Proceedings/2018/0476.pdf),
<!-- [[SIGSPATIAL'17]](https://www.ijcai.org/Proceedings/2018/0476.pdf), -->
[[IJCAI'16]](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/10/Traffic-cascading-patterns_Zheng_SIGSPATIAL2017.pdf).



- **Graph Mining**:
[ICLR'23]
[[KDD'22]](https://arxiv.org/pdf/2207.05584.pdf), 
[[WWW'21]](https://dl.acm.org/doi/abs/10.1145/3442381.3449796?casa_token=ld3tJXow02AAAAAA:k6qS_Tsxym4YyANwQn8a-0Xf98Y0jD_gfTpPt8wocORTvaGRThRLseXYuvLbO8RU_EC0k6gAX6T7dg), 
[[WWW'21]](https://bhooi.github.io/papers/curgraph_web21.pdf), 
[[NeurIPS'21]](https://proceedings.neurips.cc/paper/2021/file/0b0b0994d12ad343511adfbfc364256e-Paper.pdf), 
[[NeurIPS'21]](https://proceedings.neurips.cc/paper/2021/file/a3048e47310d6efaa4b1eaf55227bc92-Paper.pdf), 
[[NeurIPS'20]](https://proceedings.neurips.cc/paper/2020/file/cffb6e2288a630c2a787a64ccc67097c-Paper.pdf), 
<!-- [[ECML-PKDD'20]](https://bitbucket.org/ghentdatascience/ecmlpkdd20-papers/raw/master/RT/sub_221.pdf),  -->
[[KDD'20]](https://bitbucket.org/ghentdatascience/ecmlpkdd20-papers/raw/master/RT/sub_221.pdf). 


- **Computer Vision**:
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
