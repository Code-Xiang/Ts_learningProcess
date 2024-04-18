import { MockRequest } from '@delon/mock';

const list: any[] = [];
const total = 50;

for (let i = 0; i < total; i += 1) {
  list.push({
    id: i + 1,
    disabled: i % 6 === 0,
    href: 'https://ant.design',
    avatar: [
      'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'
    ][i % 2],
    no: `TradeCode ${i}`,
    title: `一个任务名称 ${i}`,
    owner: '曲丽丽',
    description: '这是一段描述',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    progress: Math.ceil(Math.random() * 100)
  });
}

function genData(params: any): { total: number; list: any[] } {
  let ret = [...list];
  const pi = +params.pi;
  const ps = +params.ps;
  const start = (pi - 1) * ps;

  if (params.no) {
    ret = ret.filter(data => data.no.indexOf(params.no) > -1);
  }

  return { total: ret.length, list: ret.slice(start, ps * pi) };
}

function saveData(id: number, value: any): { msg: string } {
  const item = list.find(w => w.id === id);
  if (!item) {
    return { msg: '无效用户信息' };
  }
  Object.assign(item, value);
  return { msg: 'ok' };
}
// 定义固定数据
const fixedData = [
  {
    id: 1,
    picture: { thumbnail: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png' },
    email: 'user@example.com',
    phone: '123-456-7890',
    registered: new Date('2021-01-01').toISOString()
  },
  {
    id: 2,
    picture: { thumbnail: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png' },
    email: 'another@example.com',
    phone: '098-765-4321',
    registered: new Date('2021-02-01').toISOString()
  }
];
function addUser(req: MockRequest): { message: string; user?: any } {
  const userData = req.body; // 从请求体中获取用户数据
  if (!userData.email || !userData.phone) {
    // 确保必要的数据存在
    return { message: 'Email and phone are required.' };
  }

  // 生成新的 ID
  const newId = fixedData.length > 0 ? Math.max(...fixedData.map(user => user.id)) + 1 : 1;
  const newUser = {
    id: newId,
    picture: { thumbnail: userData.picture || 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png' },
    email: userData.email,
    phone: userData.phone,
    registered: new Date().toISOString() // 使用当前日期作为注册日期
  };

  fixedData.push(newUser); // 将新用户添加到数组中
  return {
    message: 'User added successfully.',
    user: newUser
  };
}
export const USERS = {
  '/user': (req: MockRequest) => genData(req.queryString),
  '/user/:id': (req: MockRequest) => list.find(w => w.id === +req.params.id),
  'POST /user/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
  'POST /users': (req: MockRequest) => addUser(req),
  '/users': (req: MockRequest) => {
    // 如果有搜索参数 "name", 过滤数据
    if (req.queryString.name) {
      return {
        total: fixedData.filter(item => item.email.includes(req.queryString.name)).length,
        list: fixedData.filter(item => item.email.includes(req.queryString.name)),
        message: 'ok'
      };
    }
    return {
      total: fixedData.length,
      list: fixedData,
      message: 'ok'
    };
  },
  '/user/current': {
    name: 'Cipchk',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'cipchk@qq.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的'
      },
      {
        key: '1',
        label: '专注撩妹'
      },
      {
        key: '2',
        label: '帅~'
      },
      {
        key: '3',
        label: '通吃'
      },
      {
        key: '4',
        label: '专职后端'
      },
      {
        key: '5',
        label: '海纳百川'
      }
    ],
    notifyCount: 12,
    country: 'China',
    geographic: {
      province: {
        label: '上海',
        key: '330000'
      },
      city: {
        label: '市辖区',
        key: '330100'
      }
    },
    address: 'XX区XXX路 XX 号',
    phone: '你猜-你猜你猜猜猜'
  },
  'POST /user/avatar': 'ok',
  'POST /login/account': (req: MockRequest) => {
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
      return { msg: `Invalid username or password（admin/ng-alain.com）` };
    }
    return {
      msg: 'ok',
      user: {
        token: '123456789',
        name: data.userName,
        email: `${data.userName}@qq.com`,
        id: 10000,
        time: +new Date()
      }
    };
  },
  'POST /register': {
    msg: 'ok'
  }
};
