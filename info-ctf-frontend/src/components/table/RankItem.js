import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
position: relative;
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 1105.5px;
height: 442px;
left: 90px;
top: 50px;
background: #000000;
border: none;
border-radius: 3px;
text-align: center;
color: white;

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}

table {
    width: 100%;
    font-size: 14.2px;
}
`;



const RankItem = () => {
    return (
        <>
            <p style={{ marginLeft: '500px' }}>
                Top 50 Users
            </p>
            <StyledTable>
                <table>
                    <thead>
                        <tr>
                            <th>-rank-</th>
                            <th>-id-</th>
                            <th>-score-</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>123</th>
                            <th>your ID</th>
                            <th>0</th>

                        </tr>
                        <tr>
                            <th>1</th>
                            <th>엄준식</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>2</th>
                            <th>자랑스러운김혜준</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>3</th>
                            <th>Hello</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>4</th>
                            <th>Test</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>5</th>
                            <th>goodbye</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>6</th>
                            <th>어아아아</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>7</th>
                            <th>하기시러어</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>8</th>
                            <th>마츠리</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>9</th>
                            <th>홍길동</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>10</th>
                            <th>장지환</th>
                            <th>99999999</th>

                        </tr>


                        <tr>
                            <th>11</th>
                            <th>엄준식</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>12</th>
                            <th>자랑스러운김혜준</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>13</th>
                            <th>Hello</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>14</th>
                            <th>Test</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>15</th>
                            <th>goodbye</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>16</th>
                            <th>어아아아</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>17</th>
                            <th>하기시러어</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>18</th>
                            <th>마츠리</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>19</th>
                            <th>홍길동</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>20</th>
                            <th>장지환</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>21</th>
                            <th>엄준식</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>22</th>
                            <th>자랑스러운김혜준</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>23</th>
                            <th>Hello</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>24</th>
                            <th>Test</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>25</th>
                            <th>goodbye</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>26</th>
                            <th>어아아아</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>27</th>
                            <th>하기시러어</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>28</th>
                            <th>마츠리</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>29</th>
                            <th>홍길동</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>30</th>
                            <th>장지환</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>31</th>
                            <th>엄준식</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>32</th>
                            <th>자랑스러운김혜준</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>33</th>
                            <th>Hello</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>34</th>
                            <th>Test</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>35</th>
                            <th>goodbye</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>36</th>
                            <th>어아아아</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>37</th>
                            <th>하기시러어</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>38</th>
                            <th>마츠리</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>39</th>
                            <th>홍길동</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>40</th>
                            <th>장지환</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>41</th>
                            <th>엄준식</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>42</th>
                            <th>자랑스러운김혜준</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>43</th>
                            <th>Hello</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>44</th>
                            <th>Test</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>45</th>
                            <th>goodbye</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>46</th>
                            <th>어아아아</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>47</th>
                            <th>하기시러어</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>48</th>
                            <th>마츠리</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>49</th>
                            <th>홍길동</th>
                            <th>99999999</th>

                        </tr>
                        <tr>
                            <th>50</th>
                            <th>장지환</th>
                            <th>99999999</th>

                        </tr>
                    </tbody>
                </table>
            </StyledTable>

        </>
    );
};

export default RankItem;