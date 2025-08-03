export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  aType: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  bType: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export const questions: Question[] = [
  // EI维度 (外向-内向)
  {
    id: 1,
    question: "在聚会中，您更倾向于：",
    optionA: "主动与多人交谈，享受热闹的氛围",
    optionB: "与少数几个人进行深入交流",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 2,
    question: "当需要休息放松时，您更喜欢：",
    optionA: "和朋友出去活动，寻求刺激",
    optionB: "独自在家阅读或思考",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 3,
    question: "在工作中，您更容易：",
    optionA: "通过与他人讨论来理清思路",
    optionB: "通过独自思考来解决问题",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 4,
    question: "面对新环境时，您通常：",
    optionA: "很快融入并结识新朋友",
    optionB: "需要时间观察和适应",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 5,
    question: "在表达想法时，您更倾向于：",
    optionA: "边想边说，通过交流完善观点",
    optionB: "深思熟虑后再清晰表达",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 6,
    question: "您的能量来源主要是：",
    optionA: "与人互动和外部刺激",
    optionB: "内心世界和个人反思",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 7,
    question: "在团队合作中，您更可能：",
    optionA: "积极发言，推动讨论进程",
    optionB: "仔细倾听，深入分析问题",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 8,
    question: "面对冲突时，您更倾向于：",
    optionA: "直接沟通，当面解决",
    optionB: "先冷静思考，再寻求解决方案",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 9,
    question: "在学习新技能时，您更喜欢：",
    optionA: "参加群体活动或课程",
    optionB: "自主学习和练习",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 10,
    question: "您更容易被以下哪种情况激励：",
    optionA: "公开的赞扬和认可",
    optionB: "个人成长和内在满足",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 11,
    question: "在处理压力时，您更可能：",
    optionA: "寻求朋友和同事的支持",
    optionB: "独自处理并自我调节",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 12,
    question: "您对电话交流的态度是：",
    optionA: "享受电话聊天，经常主动打电话",
    optionB: "倾向于短信或邮件，避免不必要的电话",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 13,
    question: "在做决定前，您更倾向于：",
    optionA: "咨询多人意见，集思广益",
    optionB: "独立思考，相信自己的判断",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 14,
    question: "您更享受以下哪种工作环境：",
    optionA: "开放式办公，便于交流协作",
    optionB: "安静的独立空间，专注工作",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },
  {
    id: 15,
    question: "在社交媒体上，您更可能：",
    optionA: "频繁发布动态，与人互动",
    optionB: "主要浏览他人内容，较少发声",
    dimension: "EI",
    aType: "E",
    bType: "I"
  },

  // SN维度 (感觉-直觉)
  {
    id: 16,
    question: "在解决问题时，您更依赖：",
    optionA: "具体的事实和数据",
    optionB: "直觉和整体印象",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 17,
    question: "您更感兴趣的是：",
    optionA: "当前的具体问题和实际应用",
    optionB: "未来的可能性和创新想法",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 18,
    question: "在学习时，您更喜欢：",
    optionA: "循序渐进，掌握每个细节",
    optionB: "先了解大概框架，再填充细节",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 19,
    question: "您更容易记住：",
    optionA: "具体的事实、日期和细节",
    optionB: "概念、想法和整体印象",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 20,
    question: "在工作中，您更重视：",
    optionA: "实用性和可操作性",
    optionB: "创新性和想象力",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 21,
    question: "面对新项目时，您更关注：",
    optionA: "具体的执行步骤和资源需求",
    optionB: "项目的愿景和发展潜力",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 22,
    question: "您更喜欢以下哪种类型的书籍：",
    optionA: "实用指南、历史纪实类",
    optionB: "科幻小说、哲学思辨类",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 23,
    question: "在观察事物时，您更容易注意到：",
    optionA: "具体的细节和现实情况",
    optionB: "隐含的意义和潜在联系",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 24,
    question: "您更倾向于：",
    optionA: "相信经验和已验证的方法",
    optionB: "尝试新方法和创新途径",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 25,
    question: "在制定计划时，您更关注：",
    optionA: "具体的时间安排和资源分配",
    optionB: "目标愿景和多种可能性",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 26,
    question: "您更容易被以下哪种工作吸引：",
    optionA: "有明确标准和程序的工作",
    optionB: "充满挑战和创新机会的工作",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 27,
    question: "在交流时，您更倾向于：",
    optionA: "准确描述具体情况",
    optionB: "表达概念和抽象想法",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 28,
    question: "您更相信：",
    optionA: "眼见为实的具体证据",
    optionB: "直觉判断和第六感",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 29,
    question: "面对变化时，您更可能：",
    optionA: "谨慎评估，基于已知情况做决定",
    optionB: "拥抱变化，探索新的可能性",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },
  {
    id: 30,
    question: "您更喜欢处理：",
    optionA: "现实存在的具体问题",
    optionB: "理论性和概念性问题",
    dimension: "SN",
    aType: "S",
    bType: "N"
  },

  // TF维度 (思考-情感)
  {
    id: 31,
    question: "在做决定时，您更重视：",
    optionA: "逻辑分析和客观标准",
    optionB: "个人价值观和他人感受",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 32,
    question: "面对冲突时，您更倾向于：",
    optionA: "坚持原则，据理力争",
    optionB: "寻求和谐，照顾各方感受",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 33,
    question: "您更容易被以下哪种论证说服：",
    optionA: "有数据支撑的逻辑论证",
    optionB: "考虑人情因素的感性论证",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 34,
    question: "在评价他人时，您更看重：",
    optionA: "能力和工作表现",
    optionB: "品格和人际关系",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 35,
    question: "在给出反馈时，您更倾向于：",
    optionA: "直接指出问题和改进建议",
    optionB: "委婉表达，考虑对方感受",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 36,
    question: "您更希望别人认为您是：",
    optionA: "公正客观的人",
    optionB: "善解人意的人",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 37,
    question: "在团队中，您更可能扮演：",
    optionA: "理性分析者的角色",
    optionB: "协调沟通者的角色",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 38,
    question: "面对批评时，您更关注：",
    optionA: "批评内容的客观性和准确性",
    optionB: "批评者的动机和表达方式",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 39,
    question: "在职场中，您更重视：",
    optionA: "工作效率和结果导向",
    optionB: "工作氛围和团队和谐",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 40,
    question: "您更容易被以下哪种情况困扰：",
    optionA: "逻辑矛盾和不合理的规则",
    optionB: "人际冲突和他人的不快",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 41,
    question: "在表达不同意见时，您更可能：",
    optionA: "直接表达观点，重在说理",
    optionB: "温和表达，避免伤害关系",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 42,
    question: "您更欣赏以下哪种品质：",
    optionA: "理性客观，能够独立思考",
    optionB: "感情丰富，善于理解他人",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 43,
    question: "在处理问题时，您更倾向于：",
    optionA: "分析根本原因，寻找最佳解决方案",
    optionB: "考虑所有相关人员的感受和需求",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 44,
    question: "您更容易注意到：",
    optionA: "系统中的漏洞和不一致之处",
    optionB: "他人的情绪变化和需要帮助的信号",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },
  {
    id: 45,
    question: "在做重要决定时，您最后更依赖：",
    optionA: "理性分析的结果",
    optionB: "内心的感受和直觉",
    dimension: "TF",
    aType: "T",
    bType: "F"
  },

  // JP维度 (判断-知觉)
  {
    id: 46,
    question: "您更喜欢：",
    optionA: "制定详细计划并严格执行",
    optionB: "保持灵活性，随机应变",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 47,
    question: "在工作中，您更倾向于：",
    optionA: "尽早完成任务，避免最后时刻的压力",
    optionB: "在截止日期前灵活安排，压力下更有效率",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 48,
    question: "面对未确定的情况，您更可能：",
    optionA: "感到不安，希望尽快确定下来",
    optionB: "享受不确定性带来的各种可能",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 49,
    question: "您的理想工作环境是：",
    optionA: "结构化，有明确的规则和流程",
    optionB: "灵活性强，可以自由安排工作方式",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 50,
    question: "在旅行时，您更喜欢：",
    optionA: "提前规划好详细的行程安排",
    optionB: "大致确定目的地，具体行程随性而定",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 51,
    question: "您更容易被以下哪种情况激励：",
    optionA: "明确的目标和截止日期",
    optionB: "开放的探索和发现机会",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 52,
    question: "在购物时，您更可能：",
    optionA: "列购物清单，按计划采购",
    optionB: "随意浏览，看到喜欢的就买",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 53,
    question: "您更喜欢以下哪种工作节奏：",
    optionA: "稳定有序，按部就班",
    optionB: "富有变化，充满惊喜",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 54,
    question: "面对多个选项时，您更倾向于：",
    optionA: "快速决定，避免过度纠结",
    optionB: "保持开放，继续探索更多可能",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 55,
    question: "您的工作台/书桌更可能是：",
    optionA: "整洁有序，物品摆放有固定位置",
    optionB: "相对混乱，但自己知道东西在哪里",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 56,
    question: "在项目进行中，您更倾向于：",
    optionA: "严格按照既定计划执行",
    optionB: "根据情况调整和优化方案",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 57,
    question: "您更喜欢：",
    optionA: "在规定时间内完成预定任务",
    optionB: "有足够时间深入探索和完善",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 58,
    question: "面对变化时，您的第一反应更可能是：",
    optionA: "评估变化对现有计划的影响",
    optionB: "兴奋地思考变化带来的新机会",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 59,
    question: "您更愿意：",
    optionA: "解决已知问题，获得确定结果",
    optionB: "探索新问题，发现意外收获",
    dimension: "JP",
    aType: "J",
    bType: "P"
  },
  {
    id: 60,
    question: "在生活中，您更看重：",
    optionA: "稳定性和可预测性",
    optionB: "灵活性和适应性",
    dimension: "JP",
    aType: "J",
    bType: "P"
  }
];